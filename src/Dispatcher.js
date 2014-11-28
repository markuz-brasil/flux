import {Injector, Inject, annotate, Provide} from 'di'
import { hasAnnotation } from 'di/annotations'

import * as tau from './injectables'
import { Surface, Style } from './annotations'
import { $window, $document, Context, $famous } from './runtime'
import FirstPaint from './FirstPaint'

export function Providers () {
  return [
    $window, $document, $famous,
    FirstPaint, Context,
  ]
}

annotate(Dispatcher, new Provide(tau.Dispatcher))
annotate(Dispatcher, new Inject(Providers))
export default function Dispatcher (providers) {
  // TODO: doc this API better (take a look at the di source code as well)

  var injector = new Injector(providers)

  // must implements minimun a get method,
  // but there is a getPromise and createChild methods as well.

  return Object.assign({
    get (token, ...args) {

      var instace = injector.get(token, ...args)

      var tokenProvider = injector._providers.get(token).provider || token
      var annotations = tokenProvider.annotations

      if (hasAnnotation(tokenProvider, Surface)) {
        // only first Surface annotation matters!
        Object.assign(instace, annotations.filter((a) => a instanceof Surface)[0])
      }

      if (hasAnnotation(tokenProvider, Style)) {
        var styles = annotations
          .filter((a) => a instanceof Style)
          .map((s) => s.properties)

        styles.unshift({})
        styles = Object.assign.apply(Object, styles)
        instace.properties = styles
      }

      return instace
    },
  }, injector)
}
