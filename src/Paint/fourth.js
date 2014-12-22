/* global Fourth */

import { Inject, annotate } from 'di'
import { Surface, Style } from '../annotations'
import * as tau from '../injectables'

var _surface = new Surface(`
  <h3> hi from surface 4</h3>
`)

annotate(Fourth, _surface)

annotate(Fourth, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  // border: '2px solid rgb(210, 208, 203)',
}))

annotate(Fourth, new Style(`
  color: purple;
  font-style: italic;
`))

annotate(Fourth, new Inject(tau.$famous, tau.Context))
export default function Fourth ($fam,  context) {
  var Trans = $fam.core.Transform
  var Easing = $fam.transitions.Easing

  var x0, x1, x2
  var y0, y1, y2

  x0 = 0
  x1 = 100
  x2 = 100

  y0 = 100
  y1 = 100
  y2 = 200

  var mod = new $fam.modifiers.StateModifier({
    transform: Trans.translate(x0, y0),
    size: [200, 200],
    opacity: 0.9,
    // origin: [-0.5, -0.5],
  })


  mod.setTransform(Trans.translate(x1, y1), {
    duration: 1000, curve: Easing.inExpo
  })

  mod.setTransform(Trans.translate(x2, y2), {
    duration: 800, curve: Easing.outElastic,
  }, () => {
    _surface.setContent(`<h3> done surface 4 </h3>`)
  })


  return context.add(mod)
}

