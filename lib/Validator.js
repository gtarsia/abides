import validatePipeline from './core/validate-pipeline'
import validateValue from './core/validate-value'

export default class Validator {
  constructor({ self = [], each, children = [] }) {
    this.self = self
    if (each) {
      this.each = each
    }
    this.children = children
    this.validateSchema()
  }

  validateSchema() {
    validatePipeline(this.self)
    if (this.each) {
      this.each.validateSchema()
    }
    this.children.forEach(({ instance }) => instance.validateSchema())
  }

  validate(value) {
    const { error, result } = this.validateSelf(value)
    const children = this.validateChildren(result)
    const notAlwaysDefined = {}
    const each = this.validateEach(result)
    if (each) {
      notAlwaysDefined.each = each
    }
    return {
      error, result, children, ...notAlwaysDefined,
    }
  }

  validateSelf(value) {
    const { self } = this
    return validateValue(self, value)
  }

  validateEach(value) {
    const { each } = this
    if (each && value.length > 0) {
      return value.map((el, index) => each.validate(value[index]))
    }
    return null
  }

  validateChildren(value) {
    return this.children.map(({ key, instance }) => {
      const childValue = value ? value[key] : undefined
      return Object.assign({}, { key }, instance.validate(childValue))
    })
  }
}
