import { isFunction, isArray } from 'lodash'

export default function validatePipeline(pipeline) {
  if (!isArray(pipeline)) {
    throw new Error(`pipeline is ${pipeline} should be an array`)
  }
  const notFunctionsInSelf = pipeline
    .filter(fn => !isFunction(fn))
    .map((fn, index) => ({ fn, index }))
  if (notFunctionsInSelf.length) {
    const indexes = notFunctionsInSelf
      .map(({ index }) => index)
      .join(' ')
    throw new Error(`functions in pipeline on indexes ${indexes} are not functions`)
  }
}
