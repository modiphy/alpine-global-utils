export function mergeOptions(defaults = {}, settings = {}) {
  let options = Object.assign({}, defaults, settings)
  return options
}
