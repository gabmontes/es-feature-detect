'use strict'

module.exports = [
  {
    name: 'trailingFunctionCommas',
    test: "'use strict'; return typeof function f( a, b, ) {} === 'function';"
  },
  {
    name: 'asyncFunctions',
    test: "'use strict'; return (async function() { return 42; })() instanceof Promise;"
  }
]
