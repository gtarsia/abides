
export default function validateValue(schema, value) {
  let error = null
  let result = value
  schema.some((fn) => {
    const { result: newResult, error: newError, break: doBreak } = fn(result)
    result = newResult
    if (newError) {
      error = newError
      return true
    }
    if (doBreak) {
      return true
    }
    return false
  })
  return { error, result }
}
