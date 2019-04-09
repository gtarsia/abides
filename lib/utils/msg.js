
export function shouldBeOfType(name, value, type) {
  return `${name} was ${value} but should be of type ${type}`
}

export function shouldBeDefined(name, value) {
  return `${name} was ${value} but should not be null or undefined`
}
