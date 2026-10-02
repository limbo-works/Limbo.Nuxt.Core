import { toArray } from '@unocss/core';

export async function transformIconString(uno, icon, color) {
	const presetIcons = uno.config.presets?.flat()?.find((preset) => {
		return preset.name === '@unocss/preset-icons';
	});
	if (!presetIcons) {
		console.warn(
			'@unocss/preset-icons not found, icon() directive will be keep as-is'
		);
		return;
	}

	const {
		scale = 1,
		prefix = 'i-',
		collections: customCollections,
		customizations = {},
		autoInstall = false,
		iconifyCollectionsNames,
		collectionsNodeResolvePath,
		unit,
	} = presetIcons.options;
	const { api } = presetIcons;

	async function iconCustomizer(collection, name, props) {
		await customizations.iconCustomizer?.(collection, name, props);
		if (unit) {
			if (!props.width) props.width = `${scale}${unit}`;
			if (!props.height) props.height = `${scale}${unit}`;
		}
	}

	const loaderOptions = {
		addXmlNs: true,
		scale,
		customCollections,
		autoInstall,
		cwd: collectionsNodeResolvePath,
		warn: undefined,
		customizations: {
			...customizations,
			trimCustomSvg: true,
			iconCustomizer,
		},
	};
	const loader =
		(await api.createNodeLoader?.()) ||
		(async () => {
			return undefined;
		});
	for (const iconPrefix of toArray(prefix)) {
		if (!icon.startsWith(iconPrefix)) continue;
		const parsed = await api.parseIconWithLoader(
			icon.slice(iconPrefix.length),
			loader,
			loaderOptions,
			iconifyCollectionsNames
		);
		if (parsed) {
			const svg = api.encodeSvgForCss(parsed.svg);
			return `url("data:image/svg+xml;utf8,${color ? svg.replace(/currentcolor/gi, color) : svg}")`;
		}
	}
}
