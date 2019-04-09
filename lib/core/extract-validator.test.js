import test from 'ava'
import validatePipeline from './validate-pipeline'

test('it should fail when validating a not array', (t) => {
  const pipeline = 1
  t.throws(() => validatePipeline(pipeline), Error, 'pipeline is 1 but should be an array')
})

test('it should fail when validating an array with one not function', (t) => {
  const fn = () => {}
  const pipeline = [fn, fn, 1, fn, 1]
  t.throws(() => validatePipeline(pipeline), Error, 'functions in pipeline on indexes 2 4 are not functions')
})
