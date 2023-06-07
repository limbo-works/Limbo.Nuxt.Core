import { defineConfig } from 'unocss';
import presetCore from '../assets/js/unocss/preset-core.js';
import presetNoDefaultRem from '../assets/js/unocss/preset-no-default-rem.js';

export default defineConfig({
	presets: [
		presetCore(),
		presetNoDefaultRem(),
	],

	theme: {
		colors: {
			blue: 'blue',
			red: 'red',
		},
	},
});
