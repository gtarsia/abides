import test from 'ava'
import translateValidation from './translate-validation'

test('it should translate a Validator validation structure correctly', (t) => {
  const result = {
    color: 'red',
    info: {
      year: null,
    },
  }
  const validation = {
    error: null,
    result,
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
    result,
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
  const actual = translateValidation(validation)
  t.deepEqual(actual, expected)
})

test('it should translate a Validator each validation structure correctly', (t) => {
  const result = [1, null, 3]
  const validation = {
    error: null,
    each: [{ error: null }, { error: 'is null but should not be null or undefined' }, { error: null }],
    result,
    children: [],
  }
  const actual = translateValidation(validation)
  const expected = {
    ok: false,
    result,
    validation: {
      error: null,
      errorEach: [{ error: null }, { error: 'is null but should not be null or undefined' }, { error: null }],
    },
    errors: [
      '[1] is null but should not be null or undefined',
    ],
  }
  t.deepEqual(actual, expected)
})
