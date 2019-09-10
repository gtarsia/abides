import extractValidator from './lib/core/extract-validator'
import translateValidation from './lib/core/translate-validation'

export * from './lib/validators/index'

/**
 * Abides.
 *
 * @description Determines if value complies with given schema
 * // returns { ok: true, errors: [] }
 * @example abides('Pete', String)
 * @example abides({ dog: 'Pete' }, { dog: String })
 * @example abides({ dog: Dog }, { dog: Dog })
 * @example abides({ n: 1 }, { n: Number })
 *
 * @param {any} value - The value to check for compliance.
 * @param {any} schema - The schema that the value should comply.
 * @param {any} opts - Opts that are used to throw.
 * @returns {Object} - An object in the form of { ok: true|false, errors: [] }.
 */
export function abides(value, schema, opts = {}) {
  const validator = extractValidator(schema)
  const validation = validator.validate(value)
  const translation = translateValidation(validation)
  if (opts.throw === true && translation.errors.length > 0) {
    throw new Error(translation.errors.join('\n'))
  }
  return translation
}

// export function abidesAsync(value, schema) {
//   const children = extractChildren(schema)
//   const pipeline = extractPipeline(schema)
//   const instance = new Validator({ children, pipeline })
//   return instance.validateAsync(value)
// }
