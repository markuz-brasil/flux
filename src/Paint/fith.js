import { Inject, annotate } from 'di'
import { Surface, Style } from '../annotations'
import * as tau from '../injectables'

var _surface = new Surface(`
  <h3> hi from surface 5</h3>
`)

annotate(Fith, _surface)

annotate(Fith, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  // border: '2px solid rgb(210, 208, 203)',
}))

annotate(Fith, new Style(`
  color: grey;
  font-style: italic;
`))

annotate(Fith, new Inject(tau.$famous, tau.Context))
export default function Fith ($fam,  context) {
  var Trans = $fam.core.Transform

  var x0, x1, x2
  var y0, y1, y2

  x0 = 0
  x1 = 200
  x2 = 200

  y0 = 200
  y1 = 200
  y2 = 300

  var mod = new $fam.modifiers.StateModifier({
    transform: Trans.translate(x0, y0),
    size: [200, 200],
    opacity: 0.5,
    origin: [0, -0.5],
    // align: [0.5, 0],
  })

  // mod.add(_su)
  mod.setTransform(Trans.translate(x1, y1), {
    method: $fam.transitions.SpringTransition,
    period: 1000,
    dampingRatio: 1,
  }, () => {
    _surface.setContent(`<h3> done surface 55555 </h3>`)
  })

  return context.add(mod)
}

