/**
 * FunctionName.
 *
 * @description Returns the name of a function
 * // returns 'Dog'
 * @example functionName(function Dog() {})
 *
 * @param {function} fn - The function to pass as string.
 * @returns {undefined}
 */
export default function functionName(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/)
  return match ? match[1] : ''
}
