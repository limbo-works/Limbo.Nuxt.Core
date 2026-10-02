import { transformThemeFn, transformThemeString } from '@unocss/rule-utils';
import { transformIconString } from './icon.mjs';

export async function handleFunction(context, node) {
	const { code, uno, options } = context;
	const { throwOnMissing = true } = options;

	if (node.name === 'theme') {
		if (!node.children.size)
			throw new Error('theme() expect exact one argument');
		if (node.children.first.type !== 'String')
			throw new Error('theme() expect a string argument');

		let defaultValueLoc;
		if (node.children.size > 1) {
			const remains = node.children.toArray().slice(1);
			if (remains[0].type !== 'Operator' || remains[0].value !== ',')
				throw new Error(
					'theme() expect a comma between expression string and default value'
				);
			if (remains.length > 1)
				defaultValueLoc = [
					remains[1].loc.start.offset,
					node.children.last.loc.end.offset,
				];
		}

		const themeStr = node.children.first.value;
		let value = transformThemeString(
			themeStr,
			uno.config.theme,
			!defaultValueLoc && throwOnMissing
		);
		if (!value && defaultValueLoc)
			value = code.slice(defaultValueLoc[0], defaultValueLoc[1]);
		if (value)
			code.overwrite(node.loc.start.offset, node.loc.end.offset, value);
	} else if (node.name === 'icon') {
		const params = node.children
			.toArray()
			.filter((child) => {
				return child.type === 'String';
			})
			.map((child) => {
				return child.value;
			});
		if (!params.length)
			throw new Error('icon() expects at least one argument');

		const [icon, color] = params;
		let encodedColor;
		if (color) {
			const resolvedColor = transformThemeFn(
				color,
				uno.config.theme,
				throwOnMissing
			);
			encodedColor = encodeURIComponent(resolvedColor);
		}

		const value = await transformIconString(uno, icon, encodedColor);
		if (value)
			code.overwrite(node.loc.start.offset, node.loc.end.offset, value);
	}
}
