import test from 'ava'
import is from './is'

test('test if object is an object', (t) => {
  t.true(is({}, Object))
})

test('test if array is an array', (t) => {
  t.true(is([], Array))
})

test('test if number is a number', (t) => {
  t.true(is(3.14, Number))
})

test('test if symbol is a symbol', (t) => {
  t.true(is(Symbol('123'), Symbol))
})

test('test if string is a string', (t) => {
  t.true(is('asd', String))
})
