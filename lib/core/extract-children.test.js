import test from 'ava'
import extractChildren from './extract-children'
import extractValidator from './extract-validator'
import required from '../validators/base/required'
import Validator from '../Validator'

test('it should extract schema and children correctly', (t) => {
  const schema = {
    self: required,
    $color: required,
    $age: required,
  }
  const children = extractChildren(schema, extractValidator)
  const self = [required]
  t.deepEqual(children, [
    { key: 'color', instance: new Validator({ self }) },
    { key: 'age', instance: new Validator({ self }) },
  ])
  // const value = {
  //   color: 'red',
  //   name: null,
  // }
  // const schema = {
  //   $color: required,
  //   $name: required,
  // }
  // const instance = new Validator({ value, schema })
  // const { errors, result } = instance.validate()
})
