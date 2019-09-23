/* eslint-disable no-use-before-define */

import fromEntries from 'fromentries'
import isValidationOk from './is-validation-ok'
import is from '../utils/is'

function translateSelf({ error, children = [], each = [] }) {
  const childrenProps = translateChildren(children)
  const eachProps = translateEach(each)
  return { error, ...childrenProps, ...eachProps }
}

function translateChildren(children) {
  return fromEntries(children.map((child) => {
    const { key } = child
    return [`$${key}`, translateSelf(child)]
  }))
}

function translateEach(each) {
  if (each.length === 0) {
    return {}
  }
  return { errorEach: each.map(el => translateSelf(el)) }
}

function translateResult({ children, each, result }) {
  if (children && children.length > 0) {
    children.forEach((child) => {
      const { key } = child
      result[key] = translateResult(child)
    })
  }
  if (each && each.length > 0) {
    each.forEach((el, index) => {
      result[index] = translateResult(el)
    })
  }
  return result
}

function translateErrors({
  error, children, each, errors = [], prefixes = [],
}) {
  if (error) {
    let prefix = ''
    if (prefixes.length) {
      prefix = prefixes.reduce((accum, pf) => {
        let result = `.${pf}` // by default, assume it's an object key
        if (is(pf, Number)) { // it's a number, so it's an array index
          result = `[${pf}]`
        }
        return accum + result
      }, '')
      prefix += ' '
    }
    errors.push(prefix + error)
  }
  if (each && each) {
    each.forEach((el, index) => {
      prefixes.push(index)
      translateErrors({ errors, prefixes, ...el })
      prefixes.pop()
    })
  }
  if (children && children.length) {
    children.forEach((child) => {
      prefixes.push(child.key)
      translateErrors({ errors, prefixes, ...child })
      prefixes.pop()
    })
  }
  return errors
}

export default function translateValidation({
  error, each, children, result,
}) {
  const ok = isValidationOk({ error, children, each })
  debugger
  const validation = translateSelf({ error, children, each })
  const translatedResult = translateResult({ children, each, result })
  const errors = translateErrors({ error, children, each })
  return {
    ok, result: translatedResult, validation, errors,
  }
}
