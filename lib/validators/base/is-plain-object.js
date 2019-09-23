import { isPlainObject } from 'lodash'
import interp from '../../utils/interp'

export default function defaultize(result) {
  const error = `is ${interp(result)} but should be a plain object`
  return isPlainObject(result) ? { result } : { error, result }
}
