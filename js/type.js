const types = [
  'Function',
  'Map',
  'Set',
  'Date',
  'RegExp',
  'Array',
  'Error',
  'Symbol',
]

const typeMap = new Map(types.map((type) => [`[object ${type}]`, type.toLocaleLowerCase()]))

function type(obj) {
  if (obj === null) {
    return obj + ''
  }

  return (typeof obj === 'object' || typeof obj === 'function') ?
    typeMap.get(Object.prototype.toString.call(obj)) || 'object' :
    typeof obj
}