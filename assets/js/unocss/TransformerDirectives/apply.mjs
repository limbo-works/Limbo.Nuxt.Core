import {
	expandVariantGroup,
	notNull,
	regexScopePlaceholder,
} from '@unocss/core';
import { clone, generate, List, parse } from 'css-tree';
import { transformDirectives } from './transform.mjs';

export async function handleApply(ctx, node) {
	const { code, uno, options, filename } = ctx;

	await Promise.all(
		node.block.children
			.map(async (childNode) => {
				if (childNode.type === 'Raw')
					return transformDirectives(
						code,
						uno,
						options,
						filename,
						childNode.value,
						childNode.loc.start.offset
					);
				await parseApply(ctx, node, childNode);
			})
			.toArray()
	);
}

export async function parseApply(
	{ code, uno, applyVariable },
	node,
	childNode
) {
	const { original } = code;

	let body;
	if (
		childNode.type === 'Atrule' &&
		childNode.name === 'apply' &&
		childNode.prelude &&
		childNode.prelude.type === 'Raw'
	) {
		body = removeQuotes(childNode.prelude.value.trim());
	} else if (
		childNode.type === 'Declaration' &&
		applyVariable.includes(childNode.property) &&
		(childNode.value.type === 'Value' || childNode.value.type === 'Raw')
	) {
		let rawValue = original
			.slice(
				childNode.value.loc.start.offset,
				childNode.value.loc.end.offset
			)
			.trim();
		rawValue = removeQuotes(rawValue);
		const items = rawValue
			.split(/\s+/g)
			.filter(Boolean)
			.map((i) => removeQuotes(i));
		body = items.join(' ');
	}

	if (!body) return;

	body = removeComments(body);

	const classNames = expandVariantGroup(body)
		.split(/\s+/g)
		.map((className) => className.trim().replace(/\\/, ''));

	const properties = new Map();
	const utils = (
		await Promise.all(classNames.map((i) => uno.parseToken(i, '-')))
	)
		.filter(notNull)
		.flat()
		.sort((a, b) => a[0] - b[0])
		.sort((first, second) => {
			return (
				(first[3] ? (getParentOrder(uno, first[3]) ?? 0) : 0) -
				(second[3] ? (getParentOrder(uno, second[3]) ?? 0) : 0)
			);
		})
		.reduce((acc, item) => {
			if (item[4]?.layer === 'properties') {
				properties.set(item[1], item[2]);
				return acc;
			}

			const target = acc.find(
				(i) => i[1] === item[1] && i[3] === item[3]
			);
			if (target) {
				if (!target[2].includes(item[2])) target[2] += item[2];
			} else acc.push([...item]);
			return acc;
		}, []);

	if (!utils.length && !properties.size) return;

	let simicolonOffset =
		original[childNode.loc.end.offset] === ';'
			? 1
			: original[childNode.loc.end.offset] === '@'
				? -1
				: 0;

	for (const i of utils) {
		const [, _selector, body, parent, meta] = i;
		const selectorOrGroup =
			_selector?.replace(regexScopePlaceholder, ' ') || _selector;
		const shouldUseSelector = selectorOrGroup && selectorOrGroup !== '.\\-';
		if (parent || shouldUseSelector || meta?.noMerge) {
			let newSelector = generate(node.prelude);
			const className = code.slice(
				node.prelude.loc.start.offset,
				node.prelude.loc.end.offset
			);
			if (meta?.noMerge) newSelector = selectorOrGroup;
			else if (shouldUseSelector) {
				const ruleAST = parse(`${selectorOrGroup}{}`, {
					context: 'rule',
				});

				const prelude = clone(node.prelude);

				prelude.children?.forEach((child) => {
					const selectorListAst = clone(ruleAST.prelude);
					const classSelectors = new List();

					selectorListAst?.children?.forEach((selectorAst) => {
						classSelectors.appendList(
							selectorAst?.children?.filter(
								(i) =>
									i.type === 'ClassSelector' &&
									i.name === '\\-'
							)
						);
					});
					classSelectors.forEach((i) =>
						Object.assign(i, clone(child))
					);

					Object.assign(child, selectorListAst);
				});
				newSelector = generate(prelude);
			}
			let resolvedSelector = newSelector;
			if (newSelector.includes('.\\-')) {
				resolvedSelector = className
					.split(',')
					.map((selector) => {
						return newSelector.replace(/.\\-/g, selector.trim());
					})
					.join(',');
			}
			let css = `${resolvedSelector}{${body}}`;
			if (parent) {
				if (parent.includes(' $$ ')) {
					for (const parentSelector of parent.split(' $$ ')) {
						css = `${parentSelector}{${css}}`;
					}
				} else if (parent === '.\\-') css = `${className}{${css}}`;
				else css = `${parent}{${css}}`;
			}
			simicolonOffset = 0;
			code.appendLeft(node.loc.end.offset, css);
		} else {
			if (body.includes('@')) code.appendRight(original.length, body);
			else
				code.appendRight(
					childNode.loc.end.offset + simicolonOffset,
					body
				);
		}
	}
	const propertyCss = Array.from(properties)
		.sort(([first], [second]) => {
			return first.localeCompare(second);
		})
		.map(([property, value]) => {
			return `${property}{${value}}`;
		})
		.join('');
	if (propertyCss) code.appendLeft(0, propertyCss);
	code.remove(
		childNode.loc.start.offset,
		childNode.loc.end.offset + simicolonOffset
	);
}

function getParentOrder(uno, parent) {
	return uno.getParentOrder
		? uno.getParentOrder(parent)
		: uno.parentOrders.get(parent);
}

function removeQuotes(value) {
	return value.replace(/^(['"])(.*)\1$/, '$2');
}

function removeComments(value) {
	return value.replace(/(\/\*(?:.|\n)*?\*\/)|(\/\/.*)/g, '');
}
