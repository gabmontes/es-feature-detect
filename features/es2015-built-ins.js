'use strict'

module.exports = [
  {
    name: 'functionName',
    test: "'use strict'; function foo(){}; return foo.name === 'foo' && (function(){}).name === '';"
  },
  {
    name: 'typeofSymbol',
    test: "'use strict'; return typeof Symbol() === 'symbol';"
  },
  // Modules
  {
    name: 'moduleExport',
    test: "'use strict'; export var a = 1; return true;"
  }
]
