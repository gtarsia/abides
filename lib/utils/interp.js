import { isArray, isString } from 'lodash'

export default function interp(value) {
  if (isString(value)) {
    return `'${value}'`
  } if (isArray(value)) {
    return `[${value.map(interp).join(',')}]`
  }
  return value
}
