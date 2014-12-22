/* global Second */

import { Inject, annotate } from 'di'
import { Surface, Style } from '../annotations'
import * as tau from '../injectables'

annotate(Second, new Surface(`
  <h3> hi from surface 2</h3>
`))

annotate(Second, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  border: '2px solid rgb(210, 208, 203)',
  // marginTop: '50px',
  // marginLeft: '50px',
}))

annotate(Second, new Style(`
  color: red;
  font-style: italic;
`))

annotate(Second, new Inject(tau.$famous, tau.Context))
export default function Second ($fam, context) {
  return context.add(new $fam.modifiers.StateModifier({
      transform: $fam.core.Transform.translate(200, 0, 0),
      size: [200, 200],
      origin: [-0.01, -0.01],
    }))
}

