
import * as c0 from 'c0'
import * as famous from 'famous'
import {Injector, Inject, annotate, Provide} from 'di'

import * as tau from './injectables'

annotate($context, new Provide(tau.$context))
annotate($context, new Inject(tau.$famous))
export function $context ($fam) {
  return $fam.core.Engine.createContext()
}

annotate($famous, new Provide(tau.$famous))
annotate($famous, new Inject(window))
export function $famous ($win) {
  return famous
}

annotate($window, new Provide(window))
export function $window () { return window }

annotate($document, new Provide(document))
export function $document () { return document }
