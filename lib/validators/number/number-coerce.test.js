import test from 'ava'
import numberCoerce from './number-coerce'
import { assertOkValidator, assertNotOkValidator } from '@/validators/assert-validator'

test('it should coerce de number if it valid', (t) => {
  const value = '15'
  const { ok, error, result } = numberCoerce(value)
  assertOkValidator({ ok, error })
  t.is(result, 15)
})

test('it should error if the number is not valid', (t) => {
  const value = 'qwe'
  const { ok, error, result } = numberCoerce(value)
  assertNotOkValidator({ ok, error })
  t.is(result, value)
  t.is(error, 'is \'qwe\' but should be able to coerce to Number')
})
