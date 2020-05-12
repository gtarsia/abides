
export default function required(val) {
  if (val === null || val === undefined) {
    throw new Error(`was ${val} but should not be null or undefined`)
  }
  return val
}
