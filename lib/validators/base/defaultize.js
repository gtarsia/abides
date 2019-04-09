import { ok } from '@/validators/validator-return'

export default function defaultize(defaultValue) {
  return function defaultizeInner(value) {
    const result = value == null
      ? defaultValue
      : value
    return ok({ result })
  }
}
