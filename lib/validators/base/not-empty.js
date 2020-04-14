import { isEmpty } from 'lodash-es'
import interp from '../../utils/interp'

export default function notEmpty(value) {
  const error = `is ${interp(value)} but should not be empty`
  const result = value
  if (isEmpty(value)) {
    return { error, result }
  }
  return { result }
}
