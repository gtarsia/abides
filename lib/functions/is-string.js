import { isString as isIt } from 'lodash-es'
import interp from '../utils/interp'

export default function isString(val) {
  if (!isIt(val)) {
    throw new Error(`was ${interp(val)} but should be of type String`)
  }
  return val
}
