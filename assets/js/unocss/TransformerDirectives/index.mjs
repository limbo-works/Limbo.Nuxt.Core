import { cssIdRE } from '@unocss/core';
import { resolveApplyVariables, transformDirectives } from './transform.mjs';

export default function transformerDirectives(options = {}) {
	const applyVariables = resolveApplyVariables(options);
	return {
		name: '@unocss/transformer-directives',
		docs: 'https://unocss.dev/transformers/directives',
		enforce: options?.enforce,
		idFilter: (id) => cssIdRE.test(id),
		codeFilter: (code) => {
			return (
				code.includes('@apply') ||
				code.includes('@screen') ||
				code.includes('theme(') ||
				code.includes('icon(') ||
				applyVariables.some((variable) => {
					return code.includes(variable);
				})
			);
		},
		transform: (code, id, ctx) => {
			return transformDirectives(code, ctx.uno, options, id);
		},
	};
}
