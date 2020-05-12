import { isString, isObject } from 'lodash'

export default function interp(value) {
  if (isString(value)) {
    return `'${value}'`
  } if (isObject(value)) {
    return JSON.stringify(value)
  }
  return value
}
