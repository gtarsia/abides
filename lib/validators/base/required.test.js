import test from 'ava'
import required from './required'
import { assertOkValidator, assertNotOkValidator } from '@/validators/assert-validator'

test('it should return null error if value is defined', (t) => {
  const value = '15'
  const { ok, error, result } = required(value)
  assertOkValidator({ ok, error })
  t.is(result, value)
})

test('it should error if value is undefined or null', (t) => {
  const value = null
  const { ok, error, result } = required(value)
  assertNotOkValidator({ ok, error })
  t.is(result, value)
  t.is(error, 'is null but should not be null or undefined')
})
