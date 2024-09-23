const remRE = /(-?[.\d]+)rem/g;

function presetNoDefaultRem(options = {}) {
	const {
		// The base font size in pixels
		baseFontSize = 16,

		// The scalar value to use for rem to px conversion
		scalarValue = 4,
	} = options;

	return {
		name: 'preset-no-default-rem',
		postprocess: (util) => {
			util.entries.forEach((i) => {
				const name = i[0];
				const value = i[1];

				// Skip if explicitly set to rem
				if (remRE.test(util.selector)) {
					return;
				}

				// Skip if we are setting the font-size
				if (name === 'font-size') {
					// But convert rem to actual pixel conversion
					if (
						typeof value === 'string' &&
						!remRE.test(util.selector) &&
						remRE.test(value)
					) {
						i[1] = value.replace(
							remRE,
							(_, p1) => `${(p1 * scalarValue) / baseFontSize}rem`
						);
					}
					return;
				}

				// Set to pixels instead
				if (typeof value === 'string' && remRE.test(value)) {
					i[1] = value.replace(
						remRE,
						(_, p1) => `${p1 * scalarValue}px`
					);
				}
			});
		},
	};
}

export default presetNoDefaultRem;
export { presetNoDefaultRem };
