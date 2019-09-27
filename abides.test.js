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
    validation: {
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

test('it should throw if opts.throws === true', (t) => {
  const value = 'John'
  const schema = ofType(Number)
  const opts = { throws: true }
  const error = "is 'John' but should be of type Number"
  t.throws(() => abides(value, schema, opts), JSON.stringify({ error }, null, 2))
})

test('it should log if opts.log === fn', (t) => {
  const value = 'John'
  const schema = ofType(Number)
  let msg = ''
  const log = (_msg) => { msg = _msg }
  const opts = { log }
  abides(value, schema, opts)
  const error = "is 'John' but should be of type Number"
  t.is(msg, JSON.stringify({ error }, null, 2))
})
