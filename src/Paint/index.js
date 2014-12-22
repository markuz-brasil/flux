/* global Paint */

import { Inject, annotate, Provide} from 'di'

import * as tau from '../injectables'
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fith from './fith'

var paints = [First, Second, Third, Fourth, Fith]

annotate(Paint, new Provide(tau.Paint))
annotate(Paint, new Inject(tau.Dispatcher))
export default function Paint (dispatcher) {
  return paints.map((paint) => dispatcher.get(paint))
}
