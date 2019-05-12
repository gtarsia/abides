import { ok, notOk } from '../validator-return'
import interp from '../../utils/interp'

export default function numberCoerce(value) {
  const isValid = !Number.isNaN(parseFloat(value))
  const result = isValid ? Number(value) : value
  if (!isValid) {
    const error = `is ${interp(value)} but should be able to coerce to Number`
    return notOk({ error, result })
  }
  return ok({ result })
}
