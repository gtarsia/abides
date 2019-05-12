import test from 'ava'
import stringCoerce from './string-coerce'
import { assertOkValidator } from '../assert-validator'

test('it should return ok for not empty string', (t) => {
  const value = 15
  const { ok, error, result } = stringCoerce(value)
  assertOkValidator({ ok, error })
  t.is(result, '15')
})

test('it should return \'null\' for null ', (t) => {
  const value = null
  const { ok, error, result } = stringCoerce(value)
  assertOkValidator({ ok, error })
  t.is(result, 'null')
})
