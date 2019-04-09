import test from 'ava'
import contains from './contains'

test('should return true', (t) => {
  t.true(contains('asd', 'd'))
  t.true(contains(['asd'], 'asd'))
})

test('should return false', (t) => {
  t.false(contains('asd', 'e'))
  t.false(contains('', ''))
  t.false(contains(null, null))
})
