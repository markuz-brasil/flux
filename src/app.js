
import * as c0 from 'c0'
import {Injector, Inject, annotate, Provide} from 'di'
import { readFileSync } from 'fs'

import * as tau from './interface'
import {FirstPaint} from './FirstPaint'

export var App = [
  Startup, DocumentReady, Dispatcher,
  $window, $document,
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
  return new Injector([
    $window, $document, $runtime,
    Context, Dispatcher, FirstPaint,
    React, Famous,
  ])
}

annotate(Startup, new Provide(tau.Startup))
annotate(Startup, new Inject(tau.DocumentReady, tau.Dispatcher))
function Startup (pageLoad, dispatcher) {
  console.log(readFileSync('./LICENSE', 'utf8'))

  return c0(function * () {
    yield pageLoad
    yield dispatcher.get(tau.FirstPaint)

  })
}


annotate(React, new Provide(tau.React))
annotate(React, new Inject(tau.$runtime))
function React ($runtime) {
  return $runtime.React
}

annotate(Famous, new Provide(tau.Famous))
annotate(Famous, new Inject(tau.$runtime))
function Famous ($runtime) {
  return $runtime.Famous
}


annotate($runtime, new Provide(tau.$runtime))
annotate($runtime, new Inject($window))
function $runtime ($win) {
  return $win.BundleNamespace.runtime
}

annotate(Context, new Provide(tau.Context))
function Context () {
  return {
    my: 'obj'
  }
}

annotate($window, new Provide(window))
function $window () {
  return window
}

annotate($document, new Provide(document))
function $document () {
  return document
}
