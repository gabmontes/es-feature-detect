'use strict'

module.exports = [
  {
    name: 'arrowFunctions',
    test: "'use strict'; var a = () => true; return a();"
  },
  {
    name: 'class',
    test: "'use strict'; class Foo {}; class Bar extends Foo {}; return typeof Foo === 'function' && typeof Bar === 'function';"
  },
  {
    name: 'objectSuper',
    test: "'use strict'; var a = { b: 2 }, c = { d() { return super.b; } }; Object.setPrototypeOf(c, a); return c.d() === 2;"
  },
  {
    name: 'generators',
    test: "'use strict'; function *a() { yield; }; return true;"
  }
]
