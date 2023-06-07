const remRE = /(-?[.\d]+)rem/g;

export default function presetNoDefaultRem(options = {}) {
	const {
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
					return;
				}

				// Set to pixels instead
				if (typeof value === 'string' && remRE.test(value)) {
					i[1] = value.replace(remRE, (_, p1) => `${p1 * scalarValue}px`);
				}
			});
		},
	};
}
