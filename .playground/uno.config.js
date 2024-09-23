import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core.mjs';
import breakpoints from './assets/js/breakpoints.cjs';

export default defineConfig({
	presets: [presetCore({ breakpoints })],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
