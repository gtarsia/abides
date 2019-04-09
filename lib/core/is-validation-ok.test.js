import test from 'ava'
import isValidationOk from './is-validation-ok'

test('should return false if a child has an error', (t) => {
  const children = [{ error: 'this is an error' }]
  const validation = { error: null, children }
  t.false(isValidationOk(validation))
})

test('should return true if no child has an error', (t) => {
  const children = [{ children: [], error: null }]
  const validation = { error: null, children }
  t.true(isValidationOk(validation))
})

test('should return false if root has an error', (t) => {
  const children = [{ children: [], error: null }]
  const validation = { error: 'error', children }
  t.false(isValidationOk(validation))
})

test('should return false if a 2 level child has an error', (t) => {
  const deepChildren = [{ children: [], error: 'qwe' }]
  const children = [{ children: deepChildren, error: null }]
  const validation = { error: null, children }
  t.false(isValidationOk(validation))
})
