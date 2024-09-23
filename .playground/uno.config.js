import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core.js';
import breakpoints from './assets/js/breakpoints.js';

export default defineConfig({
	presets: [presetCore({ breakpoints })],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
