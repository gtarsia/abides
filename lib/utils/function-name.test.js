import test from 'ava'
import functionName from './function-name'

test('test if object returns string Object', (t) => {
  t.is(functionName(Object), 'Object')
})

test('test if unnamed function returns empty string', (t) => {
  t.is(functionName(() => {}), '')
})

test('test if named function returns function name', (t) => {
  const fn = function Dog() {}
  t.is(functionName(fn), 'Dog')
})

test('test if several types return the appropriate name', (t) => {
  t.is(functionName(Date), 'Date')
})
