'use strict'

module.exports = [
  {
    name: 'const',
    test: "'use strict'; const foo = 123; return foo === 123;"
  },
  {
    name: 'let',
    test: "'use strict'; let foo = 123; return foo === 123;"
  },
  {
    name: 'blockLevelFunctionDeclaration',
    test: "'use strict'; if (f() !== 1) { return false; } function f() { return 1; } { if (f() !== 2) return false; function f() { return 2; } if (f() !== 2) return false; } if (f() !== 1) return false; return true;"
  }
]
