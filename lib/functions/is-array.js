import { isArray as isIt } from 'lodash'
import interp from '../utils/interp'

export default function isArray(val) {
  if (!isIt(val)) {
    throw new Error(`was ${interp(val)} but should be of type Array`)
  }
  return val
}
