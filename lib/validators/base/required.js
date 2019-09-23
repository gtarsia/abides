import interp from '../../utils/interp'

export default function required(result) {
  return (result === null || result === undefined)
    ? { error: `is ${interp(result)} but should not be null or undefined`, result }
    : { result }
}
