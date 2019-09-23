import is from '../../utils/is'
import functionName from '../../utils/function-name'
import interp from '../../utils/interp'

export default function ofType(type) {
  return function ofTypeInner(value) {
    const result = value
    const error = `is ${interp(value)} but should be of type ${functionName(type)}`
    if (!is(value, type)) {
      return { error, result }
    }
    return { result }
  }
}
