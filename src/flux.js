
import * as c0 from 'c0'
import {Injector, Inject, annotate, Provide} from 'di'
import { hasAnnotation } from 'di/annotations'
import { readFileSync } from 'fs'

import * as tau from './injectables'
import { FirstPaint, Surface, Style } from './FirstPaint'
import { Surface, Style } from './annotations'

export var App = [
  Startup, DocumentReady, Dispatcher,
  $window, $document, $context, $famous,
]

annotate(DocumentReady, new Provide(tau.DocumentReady))
annotate(DocumentReady, new Inject(window, document))
function DocumentReady ($win, $doc) {
  if ($doc.readyState === "complete") return

  return (next) => {
    // making double sure we get the load event
    $doc.addEventListener( "DOMContentLoaded", loaded, false )
    $win.addEventListener( "load", loaded, false )

    function loaded () {
      $doc.removeEventListener( "DOMContentLoaded", loaded, false )
      $win.removeEventListener( "load", loaded, false )
      next()
    }
  }
}

annotate(Dispatcher, new Provide(tau.Dispatcher))
function Dispatcher () {

  var injector = new Injector([
    $context, FirstPaint, $famous,
    $window, $document,
  ])

  // TODO: doc this API better (take a look at the di source code as well)
  // must implements minimun a get method,
  // but there is a getPromise and createChild methods as well.

  return Object.assign({
    get (token, resolving = [], wantPromise = false, wantLazy = false) {

      var instace = injector.get(token, resolving, wantPromise, wantLazy)
      var tokenProvider = injector._providers.get(token).provider || token
      var annotations = tokenProvider.annotations

      if (hasAnnotation(tokenProvider, Surface)) {
        Object.assign(instace, annotations.filter((a) => a instanceof Surface)[0])
      }

      if (hasAnnotation(tokenProvider, Style)) {
        var styles = annotations
          .filter((a) => a instanceof Style)
          .map((s)=> s.properties)

        styles.unshift({})
        styles = Object.assign.apply(Object, styles)
        instace.properties = styles
      }

      return instace
    },
  }, injector)
}

annotate(Startup, new Provide(tau.Startup))
annotate(Startup, new Inject(tau.DocumentReady, tau.Dispatcher, tau.$context))
annotate(Startup, new Inject(document))
function Startup (loading, dispatcher, context, $doc) {
  // MIT LICENSE
  console.log(readFileSync('./LICENSE', 'utf8'))

  return c0(function * () {
    yield loading
    // cleanning the body, just because :)
    $doc.body.innerHTML = ''
    context.add(dispatcher.get(tau.FirstPaint))

  })
}

annotate($context, new Provide(tau.$context))
annotate($context, new Inject(tau.$famous))
export function $context ($fam) {
  return $fam.core.Engine.createContext()
}

annotate($famous, new Provide(tau.$famous))
annotate($famous, new Inject(window))
export function $famous ($win) {
  return $win.ReactFamousRuntime.Famous
}

annotate($window, new Provide(window))
function $window () { return window }

annotate($document, new Provide(document))
function $document () { return document }
