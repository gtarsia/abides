import is from '@/utils/is'
import functionName from '@/utils/function-name'
import { ok, notOk } from '@/validators/validator-return'
import interp from '@/utils/interp'

export default function ofType(type) {
  return function ofTypeInner(value) {
    const result = value
    const error = `is ${interp(value)} but should be of type ${functionName(type)}`
    if (!is(value, type)) {
      return notOk({ error, result })
    }
    return ok({ result })
  }
}
