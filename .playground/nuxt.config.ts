import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	extends: '..',

	modules: ['@unocss/nuxt'],

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},

	css: [resolve('./assets/css/index.css')],
	compatibilityDate: '2024-09-23',
});
