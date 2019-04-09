import Validator from '../Validator'
import extractChildren from './extract-children'
import extractPipeline from './extract-pipeline'

export default function extractValidator(schema) {
  const children = extractChildren(schema, extractValidator)
  const pipeline = extractPipeline(schema)
  return new Validator({ children, pipeline })
}
