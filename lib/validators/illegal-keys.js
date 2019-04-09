import startsWith from '@/utils/string/starts-with'
import prefix from './child-prefix'
import contains from '@/utils/array/contains'

const validKeys = ['pipeline']
// Returns an array with the keys that are not recognized
export default function foreignKeys(obj) {
  return Object.keys(obj).filter(k => !startsWith(k, prefix) && !contains(validKeys, k))
}
