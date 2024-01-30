import presetWind from '@unocss/preset-wind';

function presetCore(options = {}) {
	// Assign to the default options
	options = Object.assign(
		{
			// Breakpoints from /assets/js/breakpoints.js
			breakpoints: {},
			// Make every rule important
			important: false,
		},
		options
	);

	// Get wind defaults with options
	const wind = presetWind(options);

	// Make the breakpoints based on the breakpoints
	const breakpoints = Object.entries(options.breakpoints || {}).reduce(
		(accumulator, [name, { em }]) => ({
			...accumulator,
			[`>=${name}`]: `${em}em`,
			[name]: `${em}em`,
		}),
		{}
	);

	// The preset
	return {
		...wind,

		name: 'preset-core',

		theme: {
			...wind.theme,
			animation: {
				none: 'none',
				keyframes: {},
			},
			blockSize: {
				auto: 'auto',
				full: '100%',
				screen: '100vh',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			blur: {
				0: '0',
				none: '0',
			},
			borderRadius: {
				none: '0px',
				full: '9999px',
			},
			boxShadow: {
				none: 'none',
			},
			colors: {
				inherit: 'inherit',
				current: 'currentColor',
				transparent: 'transparent',
				black: 'rgb(0,0,0)',
				white: 'rgb(1,1,1)',
			},
			containers: {},
			dropShadow: {
				none: '0 0 #0000',
			},
			fontSize: {},
			height: {
				auto: 'auto',
				screen: '100vh',
			},
			inlineSize: {
				auto: 'auto',
				full: '100%',
				screen: '100vw',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			letterSpacing: {
				normal: '0em',
			},
			lineHeight: {
				none: '1',
				normal: '1.5',
			},
			maxBlockSize: {
				none: 'none',
				full: '100%',
				screen: '100vh',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			maxHeight: {
				none: 'none',
				full: '100%',
				screen: '100vh',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			maxInlineSize: {
				none: 'none',
				full: '100%',
				screen: '100vw',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			maxWidth: {
				none: 'none',
				full: '100%',
				screen: '100vw',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			minBlockSize: {
				none: '0px',
				full: '100%',
				screen: '100vh',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			minHeight: {
				none: '0px',
				full: '100%',
				screen: '100vh',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			minInlineSize: {
				none: '0px',
				full: '100%',
				screen: '100vw',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			minWidth: {
				none: '0px',
				full: '100%',
				screen: '100vw',
				min: 'min-content',
				max: 'max-content',
				fit: 'fit-content',
			},
			ringWidth: {
				DEFAULT: '3px',
				0: '0px',
				1: '1px',
				2: '2px',
				5: '5px',
			},
			breakpoints: {
				...breakpoints,
			},
			spacing: {
				DEFAULT: '1px',
			},
			textIndent: {
				none: '0px',
			},
			textShadow: {
				none: '0 0 rgba(0,0,0,0)',
			},
			textStrokeWidth: {
				none: '0',
			},
			verticalBreakpoints: {},
			width: {
				auto: 'auto',
				screen: '100vw',
			},
			wordSpacing: {
				normal: '0em',
			},
		},

		variants: [
			...wind.variants,

			// group-focus-within:${class}
			(matcher) => {
				if (!matcher.startsWith('group-focus-within')) {
					return matcher;
				}
				return {
					matcher: matcher.slice('group-focus-within:'.length),
					selector: (s) => `.group:focus-within ${s}`,
				};
			},

			// group-data-hover:${class}
			(matcher) => {
				if (!matcher.startsWith('group-data-hover')) {
					return matcher;
				}
				return {
					matcher: matcher.slice('group-data-hover:'.length),
					selector: (s) => `.group[data-hover="hover"] ${s}`,
				};
			},

			// Make all the rules important per default
			(matcher) => {
				if (!options.important) {
					return matcher;
				}
				return {
					matcher,
					body: (body) => {
						body.forEach((v) => {
							if (v[1] && !String(v[1]).includes('!important')) {
								v[1] += ' !important';
							}
						});
						return body;
					},
				};
			},
		],
	};
}

exports['default'] = presetCore;
exports.presetCore = presetCore;
