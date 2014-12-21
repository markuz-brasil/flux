import * as c0 from 'c0'
import { Inject, annotate, Provide } from 'di'

import * as tau from './injectables'

annotate(Startup, new Provide(tau.Startup))
annotate(Startup, new Inject(tau.DocumentReady, tau.Dispatcher))
export function Startup (loading, dispatcher) {
  return c0(function * () {
    yield loading

    // init app here
    dispatcher.get(tau.Paint)
  })
}

annotate(DocumentReady, new Provide(tau.DocumentReady))
annotate(DocumentReady, new Inject(window, document))
export function DocumentReady ($win, $doc) {
  if ($doc.readyState === 'complete') { return }

  // see c0's API
  return (next) => {
    // making double sure we get the document load event
    $doc.addEventListener( 'DOMContentLoaded', loaded, false )
    $win.addEventListener( 'load', loaded, false )

    function loaded () {
      $doc.removeEventListener( 'DOMContentLoaded', loaded, false )
      $win.removeEventListener( 'load', loaded, false )
      next()
    }
  }
}
