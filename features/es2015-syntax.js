'use strict'

module.exports = [
  {
    name: 'defaultParameters',
    test: "'use strict'; function a(b = 2) { return b; }; return a() === 2;"
  },
  {
    name: 'restParameters',
    test: "'use strict'; return (function (foo, ...args) { return args instanceof Array && args + '' === 'bar,baz'; }('foo', 'bar', 'baz'));"
  },
  {
    name: 'spreadOperator',
    test: "'use strict'; return Math.max(...[1, 2, 3]) === 3;"
  },
  {
    name: 'computedProperties',
    test: "'use strict'; var a = 1, b = { ['x' + a]: 2 }; return b.x1 === 2;"
  },
  {
    name: 'shorthandProperties',
    test: "'use strict'; var a = 7, b = 8, c = {a, b}, get = 'a', d = { get }; return c.a === a && c.b === b && d.get === get;"
  },
  {
    name: 'shorthandMethods',
    test: "'use strict'; return ({ y() { return 2; } }).y() === 2;"
  },
  {
    name: 'forOf',
    test: "'use strict'; for (var a of [1]) {}; return a === 1;"
  },
  {
    name: 'octalIntegerLiterals',
    test: "'use strict'; var a = 0o1, b = 0b10; return a === 0o1 && b === 0b10;"
  },
  {
    name: 'templateLiterals',
    test: "'use strict'; var a = 1, b = `c${a}d`; return b === 'c1d';"
  },
  {
    name: 'stickyRegExp',
    test: "'use strict'; var a = /b/y; return true;"
  },
  {
    name: 'unicodeRegExp',
    test: "'use strict'; var a = /\\u{20BB7}/u; return true;"
  },
  {
    name: 'destructuring',
    test: "'use strict'; var a = [1, 2], [b, c] = a, d = { e: 1, f: 2}, { e: E, f} = d; return b === 1 && c === 2 && E === 1 && f === 2"
  },
  {
    name: 'unicodeLiterals',
    test: "'use strict'; var a = '\\u{1d306}'; return a === '\\ud834\\udf06';"
  }
]
