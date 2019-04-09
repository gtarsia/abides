import test from 'ava'
import withoutStarting from './without-starting'

test('"$dog" should return "dog"', (t) => {
  t.is(withoutStarting('$dog', '$'), 'dog')
})

test('"dog" should return ""', (t) => {
  t.is(withoutStarting('dog', '$'), '')
})

test('"$" should return ""', (t) => {
  t.is(withoutStarting('$', '$'), '')
})

test('empty string, null or undefined should return false', (t) => {
  t.is(withoutStarting('', '$'), '')
  t.is(withoutStarting(null, '$'), '')
  t.is(withoutStarting(undefined, '$'), '')
})
