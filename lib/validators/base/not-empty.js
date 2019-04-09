import { isEmpty } from 'lodash'
import { ok, notOk } from '@/validators/validator-return'
import interp from '@/utils/interp'

export default function notEmpty(value) {
  const error = `is ${interp(value)} but should not be empty`
  const result = value
  if (isEmpty(value)) {
    return notOk({ error, result })
  }
  return ok({ result })
}
