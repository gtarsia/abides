import test from 'ava'
import nullable from './nullable'

test('it should break if passed null things', (t) => {
  t.deepEqual(nullable(null), { result: null, break: true })
  t.deepEqual(nullable(undefined), { result: undefined, break: true })
})

test('it should not break if passed non-null things', (t) => {
  t.deepEqual(nullable('qwe'), { result: 'qwe' })
  t.deepEqual(nullable([123]), { result: [123] })
})
