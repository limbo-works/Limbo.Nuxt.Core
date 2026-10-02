import { toArray } from '@unocss/core';
import { hasIconFn, hasThemeFn as hasThemeFunction } from '@unocss/rule-utils';
import { parse, walk } from 'css-tree';
import { handleApply } from './apply.mjs';
import { handleFunction } from './functions.mjs';
import { handleScreen } from './screen.mjs';

export function resolveApplyVariables(options) {
	const { applyVariable, varStyle } = options;
	if (applyVariable !== undefined) return toArray(applyVariable || []);
	if (varStyle !== undefined) return varStyle ? [`${varStyle}apply`] : [];
	return ['--at-apply', '--uno-apply', '--uno'];
}

export async function transformDirectives(
	code,
	uno,
	options,
	filename,
	originalCode,
	offset
) {
	const applyVariable = resolveApplyVariables(options);

	const parseCode = originalCode || code.original;
	const hasApply =
		parseCode.includes('@apply') ||
		applyVariable.some((s) => parseCode.includes(s));
	const hasScreen = parseCode.includes('@screen');
	const hasFn = hasThemeFunction(parseCode) || hasIconFn(parseCode);

	if (!hasApply && !hasFn && !hasScreen) return;

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

	async function processNode(node) {
		if (hasScreen && node.type === 'Atrule' && node.name === 'screen')
			handleScreen(ctx, node);
		else if (node.type === 'Function') await handleFunction(ctx, node);
		else if (hasApply && node.type === 'Rule') await handleApply(ctx, node);
	}

	walk(ast, (node) => {
		return stack.push(processNode(node));
	});

	await Promise.all(stack);
}
