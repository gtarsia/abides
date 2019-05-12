import test from 'ava'
import notEmpty from './not-empty'
import { assertOkValidator, assertNotOkValidator } from '../assert-validator'

test('it should error if value is empty string', (t) => {
  const value = ''
  const { ok, error, result } = notEmpty(value)
  assertNotOkValidator({ ok, error })
  t.is(result, '')
})

test('it should be ok if value is non empty string', (t) => {
  const value = 'qwe'
  const { ok, error, result } = notEmpty(value)
  assertOkValidator({ ok, error })
  t.is(result, 'qwe')
})

test('it should error if value is empty array', (t) => {
  const value = []
  const { ok, error, result } = notEmpty(value)
  assertNotOkValidator({ ok, error })
  t.deepEqual(result, [])
})
