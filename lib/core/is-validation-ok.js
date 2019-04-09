
export default function isValidationOk(validation) {
  const { error, children } = validation
  if (error) {
    return false
  }
  const aChildErrored = children.some(child => !isValidationOk(child))
  return !aChildErrored
}
