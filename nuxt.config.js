// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver } from '@nuxt/kit';
import svgLoader from 'vite-svg-loader';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
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
	css: [resolve('./assets/css/index.css')],
	router: {
		options: {
			linkActiveClass: 'nuxt-link--active',
			linkExactActiveClass: 'nuxt-link--exact-active',
		},
	},
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/fontaine'],
	runtimeConfig: {
		public: {
			// These values are not protected
			apiDomain: '',
			appHost: '',
		},
	},
});
