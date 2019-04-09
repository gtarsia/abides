import functionName from './function-name'

export class BadSchemaError extends Error {
  constructor({ schema }) {
    const message = `schema ${schema.toString()} of type ${functionName(schema)} should be an array, an function or an object`
    super(message)
    this.name = 'BadSchemaError'
  }
}

export class NotImplementedError extends Error {
  constructor({ op }) {
    const message = `Operation ${op} is not implemented`
    super(message)
    this.name = 'NotImplementedError'
  }
}
