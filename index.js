var t0 = new Date

import './src/shims'

import * as c0 from 'c0'
import {Injector} from 'di'

import * as tau from './src/injectables'
import { App, Dispatcher } from './src/flux'


c0(function * () {
  // async init
  yield new Injector(App).get(tau.Startup)

  console.log('Startup took:', new Date - t0, 'ms')
})()

