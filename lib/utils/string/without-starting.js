
export default function withoutStarting(str, char) {
  if (str === undefined || str === null) {
    return ''
  } if (str === '') {
    return ''
  } if (str === char) {
    return ''
  } if (str[0] === char) {
    return str.slice(1)
  }
  return ''
}
