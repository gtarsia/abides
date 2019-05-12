import test from 'ava'
import defaultize from './defaultize'
import { assertOkValidator } from '../assert-validator'

test('it should return null error if value is defined', (t) => {
  const value = undefined
  const defaultValue = 'dood'
  const { ok, error, result } = defaultize(defaultValue)(value)
  assertOkValidator({ ok, error })
  t.is(result, defaultValue)
})

test('it should not change the value if the value is defined', (t) => {
  const value = ''
  const defaultValue = 500
  const { ok, error, result } = defaultize(defaultValue)(value)
  assertOkValidator({ ok, error })
  t.is(result, value)
})
