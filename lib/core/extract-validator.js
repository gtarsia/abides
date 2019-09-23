import Validator from '../Validator'
import extractChildren from './extract-children'
import extractSelf from './extract-self'

export default function extractValidator(schema) {
  const children = extractChildren(schema, extractValidator)
  const self = extractSelf(schema)
  let each = null
  if (schema.each) {
    each = extractValidator(schema.each)
  }
  return new Validator({ children, self, each })
}
