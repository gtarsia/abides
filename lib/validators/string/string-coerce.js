
export default function stringCoerce(value) {
  const defined = (value !== null && value !== undefined)
  const result = (defined && hasOwnProperty.call(value, 'toString'))
    ? value.toString()
    : `${value}`
  return { result }
}
