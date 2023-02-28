import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	extends: '..',
	typescript: {
		includeWorkspace: true,
	},
	css: [resolve('./assets/css/index.css')],
});
