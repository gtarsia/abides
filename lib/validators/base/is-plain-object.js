import { isPlainObject } from 'lodash'
import { ok, notOk } from '../validator-return'
import interp from '../../utils/interp'

export default function defaultize(result) {
  const error = `is ${interp(result)} but should be a plain object`
  return isPlainObject(result) ? ok({ result }) : notOk({ error, result })
}
