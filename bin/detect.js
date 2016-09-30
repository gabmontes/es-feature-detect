#!/usr/bin/env node

/* eslint no-console: 0 */

'use strict'

require('colour')
var splitCC = require('split-camelcase')
var features = require('../')

console.log('Node version: ' + process.version)
console.log()
console.log('Features:')
Object.keys(features).forEach(function (name) {
  var prettyName = splitCC(name).join(' ').toLowerCase()
  var isSupported = features[name]
  var supported = isSupported ? 'supported'.green : 'not supported'.red
  console.log('- ' + prettyName + ': ' + supported)
})
