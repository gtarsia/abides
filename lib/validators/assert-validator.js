import { isString, isEmpty } from 'lodash'
import interp from '../utils/interp'

export function assertOkValidator(props) {
  if (props === null || props === undefined) {
    throw new Error(`return is ${interp(props)} but should not be null or undefined`)
  }
  if (props.error !== null && props.error !== undefined) {
    throw new Error(`return property 'error' is ${interp(props.error)} but should be null or undefined`)
  }
}

export function assertNotOkValidator(props) {
  if (props === null || props === undefined) {
    throw new Error(`return is ${interp(props)} but should not be null or undefined`)
  }
  if (!isString(props.error) || isEmpty(props.error)) {
    throw new Error(`return property 'error' is ${interp(props.error)} but should be non-empty string`)
  }
}
