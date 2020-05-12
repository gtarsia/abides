import { isFunction as isIt } from 'lodash-es'
import interp from '../utils/interp'

export default function isFunction(val) {
  if (!isIt(val)) {
    throw new Error(`was ${interp(val)} but should be of type Function`)
  }
  return val
}
