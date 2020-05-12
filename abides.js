import validateSchemas from './lib/core/validate-schemas'
import validate from './lib/core/validate'

export function abides(obj, schemas) {
  validateSchemas(schemas)
  return validate(obj, schemas)
}

export function abidesSoftly(obj, schemas) {
  validateSchemas(schemas)
  return validate(obj, schemas)
}

export * from './lib/functions'
