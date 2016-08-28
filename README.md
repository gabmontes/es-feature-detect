# ES Feature Detect

Simple ECMAScript 2015/2016 (and beyond) feature detection module.

## Usage

Install the module:

```bash
$ npm install es-feature-detect
```

Then, require the module and check its properties for ES features availability:

```js
var features = require('es-feature-detect')

console.log(features.defaultParameters) // true or false
console.log(features.exponentiationOperator) // true or false
```

## Command-line

The module comes with a CLI to feature-detect your current Node.js environment.

```bash
$ node-feature-detect
Node version: v0.12.15

Features:
- default parameters: not supported
- rest parameters: not supported
- spread operator: not supported
- computed properties: not supported
- shorthand properties: not supported
- shorthand methods: not supported
- for of: supported
...
```

### Note

It is recommended to install the module globally (`npm install --global es-feature-detect`) to use the CLI.

## Contribute!

Missing features? Would like to see one added? Send a PR!

Don't feel like sending a PR? File an issue!

Don't feel like filing an issue? Well... you are sadly on your own.

## Acknowledgements

While developing this module, I reviewed several other ones doing similar things. Most of the inspiration (and some code) was taken from the awesome [es-feature-tests](https://github.com/getify/es-feature-tests) module by @getify and [compat-table](https://github.com/kangax/compat-table) by @kangax!

## License

WTFPL
