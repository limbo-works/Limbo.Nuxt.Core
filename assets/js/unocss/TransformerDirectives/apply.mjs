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

	const utils = (
		await Promise.all(classNames.map((i) => uno.parseToken(i, '-')))
	)
		.filter(notNull)
		.flat()
		.sort((a, b) => a[0] - b[0])
		.sort(
			(a, b) =>
				(a[3] ? (uno.parentOrders.get(a[3]) ?? 0) : 0) -
				(b[3] ? (uno.parentOrders.get(b[3]) ?? 0) : 0)
		)
		.reduce((acc, item) => {
			const target = acc.find(
				(i) => i[1] === item[1] && i[3] === item[3]
			);
			if (target) target[2] += item[2];
			else acc.push([...item]);
			return acc;
		}, []);

	if (!utils.length) return;

	let simicolonOffset =
		original[childNode.loc.end.offset] === ';'
			? 1
			: original[childNode.loc.end.offset] === '@'
				? -1
				: 0;

	for (const i of utils) {
		const [, _selector, body, parent] = i;
		const selectorOrGroup =
			_selector?.replace(regexScopePlaceholder, ' ') || _selector;
		if (parent || (selectorOrGroup && selectorOrGroup !== '.\\-')) {
			let newSelector = generate(node.prelude);
			const className = code.slice(
				node.prelude.loc.start.offset,
				node.prelude.loc.end.offset
			);
			if (selectorOrGroup && selectorOrGroup !== '.\\-') {
				const ruleAST = parse(`${selectorOrGroup}{}`, {
					context: 'rule',
				});

				const prelude = clone(node.prelude);

				prelude.children?.forEach((child) => {
					const selectorListAst = clone(ruleAST.prelude);
					const classSelectors = new List();

					selectorListAst.children.forEach((selectorAst) => {
						classSelectors.appendList(
							selectorAst.children.filter(
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
			let css = `${newSelector.replace(/.\\-/g, className)}{${body}}`;
			if (parent) css = `${parent}{${css}}`;
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
	code.remove(
		childNode.loc.start.offset,
		childNode.loc.end.offset + simicolonOffset
	);
}

function removeQuotes(value) {
	return value.replace(/^(['"])(.*)\1$/, '$2');
}

function removeComments(value) {
	return value.replace(/(\/\*(?:.|\n)*?\*\/)|(\/\/.*)/g, '');
}
