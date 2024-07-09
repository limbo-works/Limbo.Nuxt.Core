// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

const {
	NODE_ENV = 'production',
	NUXT_PUBLIC_API_DOMAIN: API_DOMAIN,
	NUXT_PUBLIC_LOCAL_PORT: LOCAL_PORT = 3000,
	NUXT_PUBLIC_SHOW_DEBUG_ERRORS = NODE_ENV !== 'production',
} = process.env;

export default defineNuxtConfig({
	extends: ['@limbo-works/image'],
	debug: NUXT_PUBLIC_SHOW_DEBUG_ERRORS,

	devServer: {
		port: LOCAL_PORT,
		https: API_DOMAIN?.startsWith?.('https') ? true : false,
	},

	app: {
		pageTransition: { name: 't-page', mode: 'out-in' },
	},

	vite: {
		plugins: [
			svgLoader({
				svgoConfig: {
					plugins: [
						{
							name: 'mergePaths',
							active: false,
						},
						{
							name: 'removeViewBox',
							active: false,
						},
						{
							name: 'removeDimensions',
							active: true,
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
								prefix: {
									toString() {
										this.counter = this.counter || 0;
										return `svg-${this.counter++}`;
									},
								},
							},
						},
					],
				},
			}),
		],
	},

	css: [fileURLToPath(new URL('./assets/css/index.css', import.meta.url))],

	router: {
		options: {
			linkActiveClass: 'nuxt-link--active',
			linkExactActiveClass: 'nuxt-link--exact-active',
		},
	},

	modules: ['nuxt-proxy', '@pinia/nuxt', '@nuxtjs/fontaine'],

	runtimeConfig: {
		public: {
			// These values are not protected
			apiDomain: '',
			appHost: '',
			showDebugErrors: NODE_ENV !== 'production',
		},
	},
	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},
	postcss: {
		plugins: {
			'postcss-nesting': {},
		},
	},
});
