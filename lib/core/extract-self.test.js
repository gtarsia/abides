import test from 'ava'
import required from '../validators/base/required'
import extractSelf from './extract-self'

test('it should extract schema and children correctly', (t) => {
  t.deepEqual(extractSelf(null), [])
  t.deepEqual(extractSelf([]), [])
  t.deepEqual(extractSelf([required]), [required])
  t.deepEqual(extractSelf(required), [required])
  t.deepEqual(extractSelf({ self: [] }), [])
  t.deepEqual(extractSelf({ $age: ['asd'] }), [])
  t.deepEqual(extractSelf({ self: required }), [required])
  t.deepEqual(extractSelf({ self: [required] }), [required])
})
