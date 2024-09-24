import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core.mjs';
import breakpoints from './assets/js/breakpoints.cjs';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '../assets/js/unocss/TransformerDirectives/index.mjs';

export default defineConfig({
	presets: [presetCore({ breakpoints })],
	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
