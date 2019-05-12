import test from 'ava'
import { abides, required, stringCoerce } from '../abides'

test('it should transform nested values', (t) => {
  const value = {
    info: {
      year: null,
    },
  }
  const schema = {
    $info: {
      pipeline: required,
      $year: stringCoerce,
    },
  }
  const { result: actual } = abides(value, schema)
  const expected = {
    info: {
      year: 'null',
    },
  }
  t.deepEqual(actual, expected)
})
