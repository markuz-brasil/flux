import * as famous from 'famous'
import { Inject, annotate, Provide } from 'di'

import * as tau from './injectables'

annotate(Context, new Provide(tau.Context))
annotate(Context, new Inject(tau.$famous))
export function Context ($fam) {
  return $fam.core.Engine.createContext()
}

// TODO: doc when to use $ on variable names
annotate($famous, new Provide(tau.$famous))
annotate($famous, new Inject(window))
export function $famous ($win) {
  return famous
}

annotate($window, new Provide(window))
export function $window () { return window }

annotate($document, new Provide(document))
export function $document () { return document }
