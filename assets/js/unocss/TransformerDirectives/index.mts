import type { SourceCodeTransformer } from '@unocss/core'
import type { TransformerDirectivesOptions } from './types.mjs'
import { cssIdRE } from '@unocss/core'
import { transformDirectives } from './transform.mjs'

export * from './types.mjs'

export default function transformerDirectives(options: TransformerDirectivesOptions = {}): SourceCodeTransformer {
  return {
    name: '@unocss/transformer-directives',
    enforce: options?.enforce,
    idFilter: id => cssIdRE.test(id),
    transform: (code, id, ctx) => {
      return transformDirectives(code, ctx.uno, options, id)
    },
  }
}
