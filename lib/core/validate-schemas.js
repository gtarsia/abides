import { isArray, isFunction, isString } from 'lodash'
import interp from '../utils/interp'

export default function validateSchemas(schemas) {
  if (!isArray(schemas)) {
    throw new Error(`schemas was ${interp(schemas)} but should be of type Array`)
  }
  const errors = []
  schemas.forEach((schema, i) => {
    if (!isArray(schema)) {
      return errors.push(`schemas[${i}] was ${interp(schema)} but should be of type Array`)
    }
    if (schema.length < 1) {
      return errors.push(`schemas[${i}] was ${interp(schema)} but should be of at least length 1`)
    }
    const [destination, ...fns] = schema
    if (!isString(destination)) {
      errors.push(`schemas[${i}][0] was ${interp(destination)} but should be of type String`)
    }
    fns.forEach((fn, j) => {
      if (!isFunction(fn)) {
        errors.push(`schemas[${i}][${j + 1}] was ${interp(fn)} but should be of type Function`)
      }
    })
    return errors
  })
  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }
}
