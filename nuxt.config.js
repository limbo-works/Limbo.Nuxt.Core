// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

const {
	NUXT_PUBLIC_API_DOMAIN: API_DOMAIN,
	NUXT_PUBLIC_LOCAL_PORT: LOCAL_PORT = 3000,
} = process.env;

export default defineNuxtConfig({
	extends: [
		'@limbo-works/image',
	],
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
							active: false,
						},
						{
							name: 'addAttributesToSVGElement',
							params: {
								attributes: ['aria-hidden="true"', 'focusable="false"'],
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
	modules: ['nuxt-proxy', '@unocss/nuxt', '@pinia/nuxt', '@nuxtjs/fontaine'],

	runtimeConfig: {
		public: {
			// These values are not protected
			apiDomain: '',
			appHost: '',
		},
	},
});
