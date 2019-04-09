import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import functionName from './function-name'

function functionDetails(value) {
  const name = functionName(value)
  const named = name !== ''
  return { type: Function, name, named }
}

function objectDetails() {
  return { type: Object }
}

export default function details(value) {
  if (isFunction(value)) {
    return functionDetails(value)
  }
  if (isObject(value)) {
    return objectDetails(value)
  }
  return { type: null }
}
