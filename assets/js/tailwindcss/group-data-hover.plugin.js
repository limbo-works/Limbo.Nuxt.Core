// https://v1.tailwindcss.com/docs/plugins#adding-variants
const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addVariant, e }) {
	addVariant('group-data-hover', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.group[data-hover="hover"] .${e(
				`group-data-hover${separator}${className}`
			)}`;
		});
	});
});
