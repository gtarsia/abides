import test from 'ava'
import required from './lib/validators/base/required'
import ofType from './lib/validators/base/of-type'
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
      self: required,
      $year: required,
    },
  }
  const actual = abides(value, schema)
  const expected = {
    ok: false,
    result: value,
    self: {
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

test('it should throw if opts.throw === true', (t) => {
  const value = 'John'
  const schema = ofType(Number)
  const opts = { throw: true }
  t.throws(() => abides(value, schema, opts), 'is \'John\' but should be of type Number')
})
