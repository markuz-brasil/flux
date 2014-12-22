/* global Dispatcher */

import {Injector, Inject, annotate, Provide} from 'di'
import { hasAnnotation } from 'di'

import * as tau from './injectables'
import { Surface, Style } from './annotations'
import { $window, $document, Context, $famous } from './runtime'
import Paint from './Paint'
// import Sections from './sections'

export function Providers () {
  return [
    $window, $document, $famous,
    Paint, Context, Dispatcher,
  ]
}

annotate(Dispatcher, new Provide(tau.Dispatcher))
annotate(Dispatcher, new Inject(Providers, tau.Context, tau.$famous))
export default function Dispatcher (providers, context, $fam) {
  // TODO: doc this API better (take a look at the di source code as well)

  var injector = new Injector(providers)

  // must implements minimun a get method,
  // but there is a getPromise and createChild methods as well.

  return {
    get (token, ...args) {
      var surface
      var instace = injector.get(token, ...args)

      var tokenProvider = injector._providers.get(token).provider || token
      var annotations = tokenProvider.annotations

      if (hasAnnotation(tokenProvider, Surface)) {
        // surface = new $fam.core.Surface
        // only first Surface annotation matters!
        surface = annotations
          .filter((a) => a instanceof Surface)[0]
      }

      if (hasAnnotation(tokenProvider, Style)) {
        var styles = annotations
          .filter((a) => a instanceof Style)
          .map((s) => s.properties)

        styles.unshift({})
        styles = Object.assign.apply(Object, styles)
        surface.properties = styles
      }

      if (surface) { return instace.add(surface) }

      return instace
    },
  }
}
