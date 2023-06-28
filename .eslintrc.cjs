module.exports = {
	root: true,
	extends: [
		// add more generic rule sets here, such as:
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@unocss',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prefer-destructuring': ['warn', { object: true, array: false }],
		'no-unused-vars': ['warn'],
		'no-undef': 0,
		'vue/no-v-html': 0,
		'vue/no-v-text-v-html-on-component': 0,
		'vue/require-default-prop': 0,
		'vue/no-multiple-template-root': 0,
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: [
					'app',
					'App',
					'error',
					'default',
					'[...]',
					'[...slug]',
					'[...page]',
					'index',
					'Frontpage',
				],
			},
		],
	},
};
