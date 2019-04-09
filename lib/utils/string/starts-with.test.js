import test from 'ava'
import startsWith from './starts-with'

test('should return true', (t) => {
  t.true(startsWith('qwe', 'q'))
})

test('should return false', (t) => {
  t.false(startsWith('qwe', ''))
  t.false(startsWith('qwe', null))
  t.false(startsWith('qwe', undefined))
  t.false(startsWith('', undefined))
  t.false(startsWith('', ''))
})
