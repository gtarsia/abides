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

export default function translateValidation({ error, children, result }) {
  const ok = isValidationOk({ error, children })
  const $ = { error }
  const childrenProps = translateChildren(children)
  const translatedResult = translateResult({ children, result })
  return {
    ok, result: translatedResult, $, ...childrenProps,
  }
}
