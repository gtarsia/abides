import test from 'ava'
import interp from './interp'

test('test if strings get enclosed in \'\'', (t) => {
  t.is(interp(''), "''")
  t.is(interp('qwe'), "'qwe'")
  t.is(interp([]), '[]')
  t.is(interp(['asd', 1]), '["asd",1]')
  t.is(interp(1), 1)
  t.is(interp({ asd: 'qwe' }), '{"asd":"qwe"}')
})
