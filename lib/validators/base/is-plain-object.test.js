import test from 'ava'
import isPlainObject from './is-plain-object'
import { assertOkValidator, assertNotOkValidator } from '@/validators/assert-validator'

test('it should be ok when passing a plain object', (t) => {
  const value = {}
  const { ok, error, result } = isPlainObject(value)
  assertOkValidator({ ok, error })
  t.is(result, value)
})

test('it should error when passing an object, but non plain', (t) => {
  const value = [1]
  const { ok, error, result } = isPlainObject(value)
  assertNotOkValidator({ ok, error })
  t.is(result, value)
  t.is(error, 'is [1] but should be a plain object')
})
