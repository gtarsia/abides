import test from 'ava'
import translateValidation from './translate-validation'

test('it should translate a Validator validation structure correctly', (t) => {
  const validation = {
    error: null,
    result: {
      color: 'red',
      info: {
        year: null,
      },
    },
    children: [
      {
        key: 'color',
        error: null,
        result: 'red',
        children: [],
      },
      {
        key: 'info',
        error: null,
        result: {
          year: null,
        },
        children: [
          {
            key: 'year',
            error: 'is null but should not be null or undefined',
            result: null,
            children: [],
          },
        ],
      },
    ],
  }
  const expected = {
    ok: false,
    result: {
      color: 'red',
      info: {
        year: null,
      },
    },
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
  }
  const actual = translateValidation(validation)
  t.deepEqual(actual, expected)
})
