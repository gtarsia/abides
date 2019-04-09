import test from 'ava'
import and from './and'

test('and should work with three tests', (t) => {
  t.deepEqual(and([]), '')
  t.deepEqual(and([1]), '1')
  t.deepEqual(and([1, 2]), '1 and 2')
  t.deepEqual(and([1, 2, 3]), '1, 2 and 3')
})
