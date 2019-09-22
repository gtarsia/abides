import { isArray, isFunction } from 'lodash'

export default function extractSelf(schema) {
  let self = schema

  if (self === null || self === undefined) {
    return []
  } if (isFunction(self)) {
    return [self]
  } if (isArray(self)) {
    return self
  } if (hasOwnProperty.call(self, 'self')) {
    self = self.self // eslint-disable-line prefer-destructuring
    return isArray(self) ? self : [self]
  }
  return []
}
