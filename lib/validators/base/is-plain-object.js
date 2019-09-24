import { isPlainObject as isIt } from 'lodash'
import interp from '../../utils/interp'

export default function isPlainObject(result) {
  const error = `is ${interp(result)} but should be a plain object`
  return isIt(result) ? { result } : { error, result }
}
