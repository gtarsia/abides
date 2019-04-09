import test from 'ava'
import { assertOkValidator, assertNotOkValidator } from './assert-validator'

test('it should return the right ok props', (t) => {
  t.notThrows(() => assertOkValidator({ ok: true, error: null }))
})

test('it should throw if return value is undefined', (t) => {
  t.throws(() => assertOkValidator(null), 'return is null but should not be null or undefined')
  t.throws(() => assertNotOkValidator(undefined), 'return is undefined but should not be null or undefined')
})

test('it should throw for ok validation if prop ok is not true', (t) => {
  t.throws(() => assertOkValidator({ ok: 1, error: null }),
    'return property \'ok\' is 1 but should be true')
})

test('it should throw for ok validation if prop error is not null', (t) => {
  t.throws(() => assertOkValidator({ ok: true, error: 'qwe' }),
    'return property \'error\' is \'qwe\' but should be null')
})

test('it should throw for error validation if prop ok is not false', (t) => {
  t.throws(() => assertNotOkValidator({ ok: 1, error: null }),
    'return property \'ok\' is 1 but should be false')
})

test('it should throw for error validation if prop error is non-empty string', (t) => {
  t.throws(() => assertNotOkValidator({ ok: false, error: '' }),
    'return property \'error\' is \'\' but should be non-empty string')
})
