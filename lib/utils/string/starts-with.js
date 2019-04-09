import { isString } from 'lodash'

export default function startsWith(str, char) {
  if (!isString(str) || !isString(char) || str === '' || char === '') {
    return false
  }
  return str[0] === char
}
