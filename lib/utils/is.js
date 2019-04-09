import * as _ from './is-lodash'
import functionName from './function-name'

export default function is(value, type) {
  const expectedType = functionName(type)
  const isFn = _[`is${expectedType}`] // eslint-disable-line import/namespace
  if (isFn !== undefined) {
    return isFn(value)
  }
  return value instanceof type
}
