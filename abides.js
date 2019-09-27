import { isFunction } from 'lodash'
import extractValidator from './lib/core/extract-validator'
import translateValidation from './lib/core/translate-validation'

export * from './lib/validators/index'
export { default as interp } from './lib/utils/interp'

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
  const result = validator.validate(value)
  const translation = translateValidation(result)
  const { ok, validation } = translation
  if (!ok) {
    const msg = JSON.stringify(validation, null, 2)
    if (opts.throws === true) {
      throw new Error(msg)
    } else if (opts.log === 'stdout') {
      console.log(msg)
    } else if (opts.log === 'stderr') {
      console.error(msg)
    } else if (isFunction(opts.log)) {
      opts.log(msg)
    }
  }
  return translation
}
