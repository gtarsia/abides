import test from 'ava'
import {
  abides, numberCoerce, ofType,
} from '../../abides'
import { ok, notOk } from '../../lib/validators/validator-return'
import expectedResult from './expected-result'
import expectedValidation from './expected-validation'

test('it should validate multiple each in a nested way', (t) => {
  const people = [
    { name: null, age: 35, kids: [{ name: 'John', age: null }] },
    { name: 'James', age: '20', kids: [{ name: 'Debra', age: '15' }, { name: null }] },
  ]
  const each = {
    $name: ofType(String),
    $age: numberCoerce,
    $kids: {
      each: {
        $name: ofType(String),
        $age: numberCoerce,
      },
    },
  }
  const self = function atLeastOneParentWithAKidNamedTimmy(result) {
    if (result.some(({ kids }) => kids.some(({ name }) => name === 'Timmy'))) {
      return ok({ result })
    }
    const error = 'there should be at least one parent with a kid named Timmy'
    return notOk({ error, result })
  }
  const schema = {
    self,
    each,
  }
  const actual = abides(people, schema)
  const expected = {
    errors: [
      'there should be at least one parent with a kid named Timmy',
      '[0].name is null but should be of type String',
      '[0].kids[0].age is null but should be able to coerce to Number',
      '[1].kids[1].name is null but should be of type String',
      '[1].kids[1].age is undefined but should be able to coerce to Number',
    ],
    ok: false,
    result: expectedResult,
    validation: expectedValidation,
  }
  t.deepEqual(actual, expected)
})
