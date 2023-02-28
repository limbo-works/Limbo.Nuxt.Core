// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver } from '@nuxt/kit';
import svgLoader from 'vite-svg-loader';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	app: {
		pageTransition: { name: 't-page', mode: 'out-in' },
	},
	vite: {
		plugins: [svgLoader()],
	},
	css: [resolve('./assets/css/index.css')],
	proxy: {
		enableProxy: true,
		proxies: {
			// docs: https://www.npmjs.com/package/@nuxtjs-alt/proxy
		},
	},
	router: {
		options: {
			linkActiveClass: 'nuxt-link--active',
			linkExactActiveClass: 'nuxt-link--exact-active',
		},
	},
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/fontaine'],
	runtimeConfig: {
		apiKey: '',
		public: {
			// These values are not protected
			apiDomain: '',
			appHost: '',
		},
	},
});
