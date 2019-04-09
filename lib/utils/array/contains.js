
export default function contains(indexable, el) {
  if (indexable == null || indexable === '') {
    return false
  }
  return indexable.indexOf(el) !== -1
}
