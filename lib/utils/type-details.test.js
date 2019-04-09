import test from 'ava'
import details from './type-details'

test('named function should return named prop', (t) => {
  const v = function makeHotdogs() {}
  const { type, named, name } = details(v)
  t.is(type, Function)
  t.is(name, 'makeHotdogs')
  t.is(named, true)
})
