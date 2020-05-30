import { set } from 'lodash-es'

function validateSingle(obj, schema, { errors, result }) {
  const [destination, ...fns] = schema
  let lastValue = obj
  fns.every((fn) => {
    try {
      lastValue = fn(lastValue, obj)
      return true
    } catch (err) {
      err.message = `${destination} ${err.message}`
      errors.push(err)
    }
    return false
  })
  set(result, destination, lastValue)
}

export default function validate(obj, schemas) {
  const result = {}
  const errors = []
  schemas.forEach(schema => validateSingle(obj, schema, { result, errors }))
  if (errors.length > 0) {
    throw new Error(`One or more validations failed:\n${errors.join('\n')}`)
  }
  return result
}
