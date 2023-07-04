import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core.js';
import presetNoDefaultRem from '../assets/js/unocss/preset-no-default-rem.js';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';
import breakpoints from './assets/js/breakpoints.js';

export default defineConfig({
	presets: [presetCore({ breakpoints }), presetNoDefaultRem()],
	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
