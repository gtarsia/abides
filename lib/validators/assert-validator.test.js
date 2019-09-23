import test from 'ava'
import { assertOkValidator, assertNotOkValidator } from './assert-validator'

test('it should return the right ok props', (t) => {
  t.notThrows(() => assertOkValidator({ error: null }))
})

test('it should throw if return value is undefined', (t) => {
  t.throws(() => assertOkValidator(null), 'return is null but should not be null or undefined')
  t.throws(() => assertNotOkValidator(undefined), 'return is undefined but should not be null or undefined')
})

test('it should throw for ok validation if prop error is not null', (t) => {
  t.throws(() => assertOkValidator({ error: 'qwe' }),
    'return property \'error\' is \'qwe\' but should be null or undefined')
})

test('it should throw for error validation if prop error is non-empty string', (t) => {
  t.throws(() => assertNotOkValidator({ error: '' }),
    'return property \'error\' is \'\' but should be non-empty string')
})
