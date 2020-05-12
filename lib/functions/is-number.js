import { isNumber as isIt } from 'lodash-es'
import interp from '../utils/interp'

export default function isNumber(val) {
  if (!isIt(val)) {
    throw new Error(`was ${interp(val)} but should be of type Number`)
  }
  return val
}
