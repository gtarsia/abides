
export default function and(values) {
  if (values.length === 0) {
    return ''
  } if (values.length === 1) {
    return values[0].toString()
  }
  const arr = values.slice()
  const del = arr.splice(-2, 2)
  return arr.concat(del.join(' and ')).join(', ')
}
