import test from 'ava'
import translateResult from './translate-result'

test('shouldnt set properties on invalid things', (t) => {
  const child = { key: 'hey', result: 'jim' }
  const children = [child]
  t.is(translateResult({ children, result: true }), true)
  t.is(translateResult({ children, result: 1 }), 1)
  t.is(translateResult({ children, result: null }), null)
  t.is(translateResult({ children, result: undefined }), undefined)
  const symbol = Symbol('qwe')
  t.is(translateResult({ children, result: symbol }), symbol)
  // Bigint is still stage 3
  // t.is(translateResult({ children, result: BigInt(1) }), BigInt(1))
  t.is(translateResult({ children, result: 'qwe' }), 'qwe')
})

test('should set properties on object like and functions', (t) => {
  const child = { key: 'hey', result: 'jim' }
  const children = [child]
  t.deepEqual(translateResult({ children, result: {} }), { hey: 'jim' })
  const arr = []
  arr.hey = 'jim'
  t.deepEqual(translateResult({ children, result: [] }), arr)
  const fn = function fn() {}
  t.deepEqual(translateResult({ children, result: fn }), fn)
  t.is(fn.hey, 'jim')
})
