import Validator from '../Validator'
import extractChildren from './extract-children'
import extractSelf from './extract-self'

export default function extractValidator(schema) {
  const children = extractChildren(schema, extractValidator)
  const self = extractSelf(schema)
  return new Validator({ children, self })
}
