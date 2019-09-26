import { isObjectLike, isFunction } from 'lodash'

export default function translateResult({ children, each, result }) {
  if (children && children.length > 0) {
    children.forEach((child) => {
      const { key } = child
      if (isObjectLike(result) || isFunction(result)) {
        result[key] = translateResult(child)
      }
    })
  }
  if (each && each.length > 0) {
    each.forEach((el, index) => {
      if (isObjectLike(result) || isFunction(result)) {
        result[index] = translateResult(el)
      }
    })
  }
  return result
}
