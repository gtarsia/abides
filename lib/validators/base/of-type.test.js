import test from 'ava'
import ofType from './of-type'
import { assertOkValidator, assertNotOkValidator } from '@/validators/assert-validator'

test('it should be ok when checking an object of type object', (t) => {
  const value = {}
  const { ok, error, result } = ofType(Object)(value)
  assertOkValidator({ ok, error })
  t.is(result, value)
})

test('it should error when checking a number of type object', (t) => {
  const value = 1
  const { ok, error, result } = ofType(Object)(value)
  assertNotOkValidator({ ok, error })
  t.is(result, value)
  t.is(error, 'is 1 but should be of type Object')
})
