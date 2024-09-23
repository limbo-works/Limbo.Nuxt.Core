import { toArray } from '@unocss/core';
import { hasThemeFn as hasThemeFunction } from '@unocss/rule-utils';
import { parse, walk } from 'css-tree';
import { handleApply } from './apply.mjs';
import { handleFunction } from './functions.mjs';
import { handleScreen } from './screen.mjs';

export async function transformDirectives(
	code,
	uno,
	options,
	filename,
	originalCode,
	offset
) {
	let { applyVariable } = options;
	const { varStyle } = options;
	if (applyVariable === undefined) {
		if (varStyle !== undefined)
			applyVariable = varStyle ? [`${varStyle}apply`] : [];
		applyVariable = ['--at-apply', '--uno-apply', '--uno'];
	}
	applyVariable = toArray(applyVariable || []);

	const parseCode = originalCode || code.original;
	const hasApply =
		parseCode.includes('@apply') ||
		applyVariable.some((s) => parseCode.includes(s));
	const hasScreen = parseCode.includes('@screen');
	const hasThemeFn = hasThemeFunction(parseCode);

	if (!hasApply && !hasThemeFn && !hasScreen) return;

	const ast = parse(parseCode, {
		parseCustomProperty: true,
		parseAtrulePrelude: false,
		positions: true,
		filename,
		offset,
	});

	if (ast.type !== 'StyleSheet') return;

	const stack = [];

	const ctx = {
		options,
		applyVariable,
		uno,
		code,
		filename,
		offset,
	};

	const processNode = async (node, _item, _list) => {
		if (hasScreen && node.type === 'Atrule') handleScreen(ctx, node);

		if (node.type === 'Function') handleFunction(ctx, node);

		if (hasApply && node.type === 'Rule') await handleApply(ctx, node);
	};

	walk(ast, (...args) => stack.push(processNode(...args)));

	await Promise.all(stack);
}
