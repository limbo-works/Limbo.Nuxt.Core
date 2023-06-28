import { defineConfig } from 'unocss';
import presetCore from './assets/js/unocss/preset-core.js';
import presetNoDefaultRem from './assets/js/unocss/preset-no-default-rem.js';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
	presets: [presetCore(), presetNoDefaultRem()],
	transformers: [transformerVariantGroup(), transformerDirectives()],
});
