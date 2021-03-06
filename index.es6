// current 6to5 shim doesn't include setImmediate.
// but on v2.0 it will
// import 'setimmediate'

var t0 = new Date

import * as c0 from 'c0'
import { Injector } from 'di'
import { readFileSync } from 'fs'

import * as tau from './src/injectables'
import { Startup, DocumentReady } from './src/Startup'
import { $window, $document } from './src/runtime'
import Dispatcher from './src/Dispatcher'

// Initial Providers
var App = [
  $window, $document,
  Startup, DocumentReady, Dispatcher,
]

c0(function * () {
  // MIT LICENSE
  console.log(readFileSync('./LICENSE', 'utf8'))

  // Async init. Control is yield back after first paint
  yield new Injector(App).get(tau.Startup)

  console.log('First paint took:', new Date - t0, 'ms')
})()

console.log('--- xxx --- xxx ---')
