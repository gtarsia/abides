import test from 'ava'
import required from '../validators/base/required'
import extractPipeline from './extract-pipeline'

test('it should extract schema and children correctly', (t) => {
  t.deepEqual(extractPipeline(null), [])
  t.deepEqual(extractPipeline([]), [])
  t.deepEqual(extractPipeline([required]), [required])
  t.deepEqual(extractPipeline(required), [required])
  t.deepEqual(extractPipeline({ $: [] }), [])
  t.deepEqual(extractPipeline({ $age: ['asd'] }), [])
  t.deepEqual(extractPipeline({ $: required }), [required])
  t.deepEqual(extractPipeline({ $: [required] }), [required])
})
