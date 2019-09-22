import { isFunction, isArray } from 'lodash'

export default function validateSelf(self) {
  if (!isArray(self)) {
    throw new Error(`self is ${self} should be an array`)
  }
  const notFunctionsInSelf = self
    .filter(fn => !isFunction(fn))
    .map((fn, index) => ({ fn, index }))
  if (notFunctionsInSelf.length) {
    const indexes = notFunctionsInSelf
      .map(({ index }) => index)
      .join(' ')
    throw new Error(`functions in self on indexes ${indexes} are not functions`)
  }
}
