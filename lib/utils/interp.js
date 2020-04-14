import { isString, isObject } from 'lodash-es'

export default function interp(value) {
  if (isString(value)) {
    return `'${value}'`
  } if (isObject(value)) {
    return JSON.stringify(value)
  }
  return value
}
