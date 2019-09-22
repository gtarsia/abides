import test from 'ava'
import validateSelf from './validate-self'

test('it should fail when validating a not array', (t) => {
  const self = 1
  t.throws(() => validateSelf(self), Error, 'self is 1 but should be an array')
})

test('it should fail when validating an array with one not function', (t) => {
  const fn = () => {}
  const self = [fn, fn, 1, fn, 1]
  t.throws(() => validateSelf(self), Error, 'functions in self on indexes 2 4 are not functions')
})
