const screenRuleRE = /(@screen [^{]+)(.+)/g;

export function handleScreen({ code, uno }, node) {
	let breakpointName = '';
	let prefix = '';

	if (node.name === 'screen' && node.prelude?.type === 'Raw')
		breakpointName = node.prelude.value.trim();

	if (!breakpointName) return;

	const match = breakpointName.match(/^(?:(lt|at)-)?(\w+)$/);
	if (match) {
		prefix = match[1];
		breakpointName = match[2];
	}

	if (!prefix) {
		const match = breakpointName.match(/^<(\d+)$/);
		if (match) {
			prefix = 'lt';
			breakpointName = match[1];
		}
	}

	const resolveBreakpoints = () => {
		const key = uno.config.presets?.some((preset) => {
			return preset.name === '@unocss/preset-wind4';
		})
			? 'breakpoint'
			: 'breakpoints';
		let breakpoints;
		if (uno.userConfig && uno.userConfig.theme)
			breakpoints = uno.userConfig.theme[key];

		if (!breakpoints) breakpoints = uno.config.theme[key];

		if (!breakpoints) return;
		return Object.entries(breakpoints)
			.sort((first, second) => {
				return (
					Number.parseInt(first[1].replace(/[a-z]+/gi, '')) -
					Number.parseInt(second[1].replace(/[a-z]+/gi, ''))
				);
			})
			.map(([point, size]) => {
				return { point, size };
			});
	};
	const variantEntries = (resolveBreakpoints() ?? []).map(
		({ point, size }, idx) => [point, size, idx]
	);
	const generateMediaQuery = (breakpointName, prefix) => {
		const [, size, idx] = variantEntries.find(
			(i) => i[0] === breakpointName
		);
		if (prefix) {
			if (prefix === 'lt')
				return `@media (max-width: ${calcMaxWidthBySize(size)})`;
			else if (prefix === 'at')
				return `@media (min-width: ${size})${variantEntries[idx + 1] ? ` and (max-width: ${calcMaxWidthBySize(variantEntries[idx + 1][1])})` : ''}`;
			else throw new Error(`breakpoint variant not supported: ${prefix}`);
		}
		return `@media (min-width: ${size})`;
	};

	if (!variantEntries.find((i) => i[0] === breakpointName))
		throw new Error(`breakpoint ${breakpointName} not found`);

	const { offset } = node.loc.start;
	const str = code.original.slice(offset, node.loc.end.offset);
	const matches = Array.from(str.matchAll(screenRuleRE));

	if (!matches.length) return;

	for (const match of matches) {
		code.overwrite(
			offset + match.index,
			offset + match.index + match[1].length,
			`${generateMediaQuery(breakpointName, prefix)}`
		);
	}
}

function calcMaxWidthBySize(size) {
	const value = size.match(/^-?\d+\.?\d*/)?.[0] || '';
	const unit = size.slice(value.length);
	const maxWidth = Number.parseFloat(value) - 0.1;
	return Number.isNaN(maxWidth) ? size : `${maxWidth}${unit}`;
}
