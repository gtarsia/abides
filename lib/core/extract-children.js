import startsWith from '../utils/string/starts-with'
import withoutStarting from '../utils/string/without-starting'

// This is the prefix for children that is used in schemas
const prefix = '$'

export default function extractChildren(schema, extractValidator) {
  return Object
    .entries(schema)
    .filter(([key]) => startsWith(key, prefix))
    .map(([key, childSchema]) => {
      const instance = extractValidator(childSchema)
      const keyWithoutPrefix = withoutStarting(key, prefix)
      return { key: keyWithoutPrefix, instance }
    })
}
