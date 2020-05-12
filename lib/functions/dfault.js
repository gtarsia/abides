
export default function dfault(df) {
  return function dfaultInner(val) {
    if (val === null || val === undefined) {
      val = df
    }
    return val
  }
}
