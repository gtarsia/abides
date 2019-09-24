
export default function nullable(value) {
  const result = value
  if (value === null || value === undefined) {
    return { result, break: true }
  }
  return { result }
}
