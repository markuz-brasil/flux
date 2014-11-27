import {Injector, Inject, annotate, Provide} from 'di'
import * as tau from './injectables'

annotate($runtime, new Provide(tau.$runtime))
annotate($runtime, new Inject(window))
export function $runtime ($win) {
  return $win.ReactFamousRuntime
}

annotate(React, new Provide(tau.React))
annotate(React, new Inject(tau.$runtime))
export function React ($runtime) {
  return $runtime.React
}

annotate(Famous, new Provide(tau.Famous))
annotate(Famous, new Inject(tau.$runtime))
export function Famous ($runtime) {
  return $runtime.Famous
}

annotate(DOM, new Provide(tau.DOM))
annotate(DOM, new Inject(tau.$runtime))
export function DOM ($runtime) {
  return $runtime.DOM
}

annotate(Mixin, new Provide(tau.Mixin))
annotate(Mixin, new Inject(tau.$runtime))
export function Mixin ($runtime) {
  return $runtime.Mixin
}
