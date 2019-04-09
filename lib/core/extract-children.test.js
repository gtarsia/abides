import test from 'ava'
import extractChildren from './extract-children'
import extractValidator from './extract-validator'
import required from '@/validators/base/required'
import Validator from '@/Validator'

test('it should extract schema and children correctly', (t) => {
  const schema = {
    $color: required,
    $age: required,
  }
  const children = extractChildren(schema, extractValidator)
  const pipeline = [required]
  t.deepEqual(children, [
    { key: 'color', instance: new Validator({ pipeline }) },
    { key: 'age', instance: new Validator({ pipeline }) },
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
