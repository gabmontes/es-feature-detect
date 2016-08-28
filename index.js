'use strict'

var features = []
  .concat(require('./features/es2015-syntax'))
  .concat(require('./features/es2015-bindings'))
  .concat(require('./features/es2015-functions'))
  .concat(require('./features/es2015-built-ins'))
  .concat(require('./features/es2016'))
  .concat(require('./features/es2017'))

var results = {}

function run(code) {
  return (new Function(code))()
}

function tryRun(code) {
  try {
    return run(code)
  } catch (err) {
    return false
  }
}

features.forEach(function (feature) {
  results[feature.name] = tryRun(feature.test)
})

module.exports = results
