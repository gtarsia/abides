import test from 'ava'
import { ok, notOk } from './validator-return'

test('ok should return with correct properties', (t) => {
  const result = 1
  t.deepEqual(ok({ result }), { ok: true, error: null, result })
})

test('notOk should return ok with correct properties', (t) => {
  const result = 1
  const error = 'this is an error'
  t.deepEqual(notOk({ error, result }), { ok: false, error, result })
})
