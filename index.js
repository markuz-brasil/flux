var t0 = new Date

import './src/zone-addons'

import * as c0 from 'c0'
import * as di from 'di'

import { readFileSync } from 'fs'

main()
function main () {
  console.log(readFileSync('./LICENSE', 'utf8'))
  console.log(Object.keys(c0), c0, di)

  c0(function * () {
    yield (next) => setTimeout(next, 100)
    console.log('*******')
  })()
}
