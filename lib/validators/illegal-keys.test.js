import test from 'ava'
import illegalKeys from './illegal-keys'

test('it should return the illegal keys', (t) => {
  const obj = {
    pipeline: null,
    tom: null,
    $child: null,
    $otherChild: null,
    nuke: null,
  }
  t.deepEqual(illegalKeys(obj), ['tom', 'nuke'])
})
