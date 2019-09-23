import fromEntries from 'fromentries'
import isValidationOk from './is-validation-ok'

function translateChildren(children) {
  return fromEntries(children.map((child) => {
    const { key, children: deepChildren, error } = child
    return [`$${key}`, { error, ...translateChildren(deepChildren) }]
  }))
}

function translateResult({ children, result }) {
  if (children.length === 0) {
    return result
  }
  return fromEntries(children.map((child) => {
    const { key } = child
    return [key, translateResult(child)]
  }))
}

function translateErrors({
  error, children, errors = [], prefixes = [],
}) {
  if (error) {
    const prefix = prefixes.length ? `.${prefixes.join('.')} ` : ''
    errors.push(prefix + error)
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

export default function translateValidation({ error, children, result }) {
  const ok = isValidationOk({ error, children })
  const childrenProps = translateChildren(children)
  const validation = { error, ...childrenProps }
  const translatedResult = translateResult({ children, result })
  const errors = translateErrors({ error, children })
  return {
    ok, result: translatedResult, validation, errors,
  }
}
