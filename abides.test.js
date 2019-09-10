import test from 'ava'
import required from './lib/validators/base/required'
import { abides } from './abides'

test('it should give errors for nested values', (t) => {
  const value = {
    color: 'red',
    info: {
      year: null,
    },
  }
  const schema = {
    $color: required,
    $info: {
      pipeline: required,
      $year: required,
    },
  }
  const actual = abides(value, schema)
  const expected = {
    ok: false,
    result: value,
    $: {
      error: null,
      $color: { error: null },
      $info: {
        error: null,
        $year: {
          error: 'is null but should not be null or undefined',
        },
      },
    },
    errors: [
      '.info.year is null but should not be null or undefined',
    ],
  }
  t.deepEqual(actual, expected)
})
