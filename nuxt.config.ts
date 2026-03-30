// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader';

const {
	NODE_ENV = 'production',
	NUXT_PUBLIC_API_DOMAIN: API_DOMAIN,
	NUXT_PUBLIC_LOCAL_PORT: LOCAL_PORT_RAW = '3000',
	NUXT_PUBLIC_DEBUG_MODE: DEBUG_MODE_RAW = 'false',
} = import.meta.env;

const LOCAL_PORT = Number.parseInt(LOCAL_PORT_RAW, 10) || 3000;
const DEBUG_MODE = DEBUG_MODE_RAW === 'true' || DEBUG_MODE_RAW === '1';

export default defineNuxtConfig({
	extends: ['@limbo-works/image'],
	debug: DEBUG_MODE,

	devServer: {
		port: LOCAL_PORT,
		https: API_DOMAIN?.startsWith?.('https') ? true : false,
	},

	app: {
		pageTransition: { name: 't-page', mode: 'out-in' },
	},

	vite: {
		plugins: [
			{
				name: 'vue-docs',
				transform(code, id) {
					if (!/vue&type=docs/.test(id)) return;
					return 'export default \'\'';
				},
			},
			svgLoader({
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: {
									mergePaths: false,
									removeViewBox: false,
								},
							},
						},
						{
							name: 'removeDimensions',
						},
						{
							name: 'addAttributesToSVGElement',
							params: {
								attributes: [
									'aria-hidden="true"',
									'focusable="false"',
								],
							},
						},
						{
							name: 'prefixIds',
							params: {
								prefix: (_node, info) => `svg-${(info.path || 'icon').replace(/[^a-zA-Z0-9]+/g, '-')}`,
							},
						},
					],
				},
			}),
		],
	},

	css: ['./assets/css/index.css'],

	router: {
		options: {
			linkActiveClass: 'nuxt-link--active',
			linkExactActiveClass: 'nuxt-link--exact-active',
		},
	},

	modules: ['@pinia/nuxt', '@nuxtjs/fontaine'],

	runtimeConfig: {
		public: {
			// These values are not protected
			apiDomain: '',
			appHost: '',
			debugMode: NODE_ENV !== 'production',
		},
	},
	postcss: {
		plugins: {
			'postcss-nesting': {},
		},
	},

	future: {
		compatibilityVersion: 4,
	},
});
