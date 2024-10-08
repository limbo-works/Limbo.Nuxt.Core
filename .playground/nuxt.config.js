import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	extends: '..',

	modules: ['@unocss/nuxt'],

	css: [resolve('./assets/css/index.css')],
	compatibilityDate: '2024-09-23',
});
