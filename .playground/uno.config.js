import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core';
import breakpoints from './assets/js/breakpoints';

export default defineConfig({
	presets: [presetCore({ breakpoints })],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
