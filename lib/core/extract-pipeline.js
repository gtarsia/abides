import { isArray, isFunction } from 'lodash'

export default function extractPipeline(schema) {
  let pipeline = schema

  if (pipeline === null || pipeline === undefined) {
    return []
  } if (isFunction(pipeline)) {
    return [pipeline]
  } if (isArray(pipeline)) {
    return pipeline
  } if (hasOwnProperty.call(pipeline, '$')) {
    pipeline = pipeline.$ // eslint-disable-line prefer-destructuring
    return isArray(pipeline) ? pipeline : [pipeline]
  }
  return []
}
