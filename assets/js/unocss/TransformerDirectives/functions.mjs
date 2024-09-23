import { transformThemeString } from '@unocss/rule-utils';

export function handleFunction(context, node) {
	const { code, uno, options } = context;
	const { throwOnMissing = true } = options;

	switch (node.name) {
	case 'theme': {
		if (node.children.size !== 1)
			throw new Error('theme() expect exact one argument');

		const themeStr = node.children.first.value;
		const value = transformThemeString(
			themeStr,
			uno.config.theme,
			throwOnMissing
		);
		if (value)
			code.overwrite(
				node.loc.start.offset,
				node.loc.end.offset,
				value
			);
	}
	}
}
