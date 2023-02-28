// https://v1.tailwindcss.com/docs/plugins#adding-variants
const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addVariant, e }) {
	addVariant('group-focus-within', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.group:focus-within .${e(
				`group-focus-within${separator}${className}`
			)}`;
		});
	});
});
