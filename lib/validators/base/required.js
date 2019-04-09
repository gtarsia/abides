import { ok, notOk } from '@/validators/validator-return'
import interp from '@/utils/interp'

export default function required(result) {
  return (result === null || result === undefined)
    ? notOk({ error: `is ${interp(result)} but should not be null or undefined`, result })
    : ok({ result })
}
