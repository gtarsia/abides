import { isFunction, isNil } from 'lodash'
import extractValidator from './lib/core/extract-validator'
import translateValidation from './lib/core/translate-validation'

export * from './lib/validators/index'
export { default as interp } from './lib/utils/interp'

/**
 * Abides.
 *
 * @description Determines if value complies with given schema
 * // returns { ok: true, errors: [], result: {} }
 * @example abides('Pete', String)
 * @example abides({ dog: 'Pete' }, { dog: String })
 * @example abides({ dog: Dog }, { dog: Dog })
 * @example abides({ n: 1 }, { n: Number })
 *
 * @param {any} value - The value to check for compliance.
 * @param {any} schema - The schema that the value should comply.
 * @returns {Object} - An object in the form of { ok: true|false, errors: [] }.
 */
export function abides(value, schema) {
  const validator = extractValidator(schema)
  const result = validator.validate(value)
  return translateValidation(result)
}

/**
 * AbidesResult.
 *
 * @description Like abides but returns result.
 * Handler argument is used in case of errors.
 * // returns result
 * @example abides('Pete', String)
 * @example abides({ dog: 'Pete' }, { dog: String })
 * @example abides({ dog: Dog }, { dog: Dog })
 * @example abides({ n: 1 }, { n: Number })
 *
 * @param {any} value - The value to check for compliance.
 * @param {any} schema - The schema that the value should comply.
 * @param {any} handler - Handler used when there are errors.
 * In such case, depending on the value of handler actions with errors:
 * * nil: exception is thrown
 * * function: called
 * * 'stdout': logs to stdout
 * * 'stderr': logs to stderr
 * * any other value: it throws before starting the validation.
 * @returns {Object} - An object in the form of { ok: true|false, errors: [] }.
 */
export function abidesResult(value, schema, handler) {
  if (isNil(handler)) {
    handler = (msg) => {
      throw new Error(msg)
    }
  } else if (isFunction(handler)) {
    // just use that function
  } else if (handler === 'stdout') {
    handler = msg => console.log(msg)
  } else if (handler === 'stderr') {
    handler = msg => console.error(msg)
  } else {
    const err = `handler was ${handler} but should be either a nil, a function, 'stdout' or 'stderr'`
    throw new Error(err)
  }
  const { result, ok, errors } = abides(value, schema)
  if (!ok) {
    const msg = errors.join('\n')
    return handler(msg)
  }
  return result
}
