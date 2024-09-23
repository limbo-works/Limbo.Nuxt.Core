import { cssIdRE } from '@unocss/core';
import { transformDirectives } from './transform.mjs';

export default function transformerDirectives(options = {}) {
	return {
		name: '@unocss/transformer-directives',
		enforce: options?.enforce,
		idFilter: (id) => cssIdRE.test(id),
		transform: (code, id, ctx) => {
			return transformDirectives(code, ctx.uno, options, id);
		},
	};
}
