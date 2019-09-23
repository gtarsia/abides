
export default function isValidationOk(validation) {
  const { error, children, each } = validation
  if (error) {
    return false
  }
  if (each && each.some(err => err)) {
    return false
  }
  const aChildErrored = children.some(child => !isValidationOk(child))
  return !aChildErrored
}
