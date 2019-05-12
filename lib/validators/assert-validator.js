import { isString, isEmpty } from 'lodash'
import interp from '../utils/interp'

export function assertOkValidator(props) {
  if (props === null || props === undefined) {
    throw new Error(`return is ${interp(props)} but should not be null or undefined`)
  }
  if (props.ok !== true) {
    throw new Error(`return property 'ok' is ${interp(props.ok)} but should be true`)
  }
  if (props.error !== null) {
    throw new Error(`return property 'error' is ${interp(props.error)} but should be null`)
  }
}

export function assertNotOkValidator(props) {
  if (props === null || props === undefined) {
    throw new Error(`return is ${interp(props)} but should not be null or undefined`)
  }
  if (props.ok !== false) {
    throw new Error(`return property 'ok' is ${interp(props.ok)} but should be false`)
  }
  if (!isString(props.error) || isEmpty(props.error)) {
    throw new Error(`return property 'error' is ${interp(props.error)} but should be non-empty string`)
  }
}
