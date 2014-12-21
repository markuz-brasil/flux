// current 6to5 shim doesn't include setImmediate.
// but on v2.0 it will
import 'setimmediate'

import { readFileSync } from 'fs'
console.log(readFileSync('./LICENSE', 'utf8'))

import './c0/arguments'
import './c0/arrays'
import './c0/generator-functions'
import './c0/generators'
import './c0/objects'
import './c0/promises'
import './c0/receiver'
import './c0/recursion'
import './c0/thunks'

console.log('--- xxx --- xxx ---')
