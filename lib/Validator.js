import validateSelf from './core/validate-self'

export default class Validator {
  constructor({ self = [], children = [] }) {
    this.self = self
    this.children = children
    this.validateSchema()
  }

  validateSchema() {
    validateSelf(this.self)
    this.children.forEach(({ instance }) => instance.validateSchema())
  }

  validate(value) {
    const { error, result } = this.validateSelf(value)
    const children = this.validateChildren(result)
    return { error, result, children }
  }

  validateSelf(value) {
    const { self } = this
    let error = null
    let result = value
    self.some((fn) => {
      const { result: newResult, error: newError } = fn(result)
      result = newResult
      if (newError) {
        error = newError
        return true
      }
      return false
    })
    return { error, result }
  }

  validateChildren(value) {
    return this.children.map(({ key, instance }) => {
      const childValue = value ? value[key] : undefined
      return Object.assign({}, { key }, instance.validate(childValue))
    })
  }
}
