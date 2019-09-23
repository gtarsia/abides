
export default function validateValue(schema, value) {
  let error = null
  let result = value
  schema.some((fn) => {
    const { result: newResult, error: newError } = fn(result)
    result = newResult
    if (newError) {
      error = newError
      return true
    }
    return false
  })
  return { error, result }
}
