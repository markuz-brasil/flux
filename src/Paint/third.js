/* global Third */
import { Inject, annotate } from 'di'
import { Surface, Style } from '../annotations'
import * as tau from '../injectables'

import Second from './second'

annotate(Third, new Surface(`
  <h3> hi from surface 3</h3>
`))

annotate(Third, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  border: '2px solid rgb(210, 208, 203)',
}))

annotate(Third, new Style(`
  color: green;
  font-style: italic;
`))

annotate(Third, new Inject(tau.$famous, Second))
export default function Third ($fam,  node) {
  var Mod = $fam.modifiers.StateModifier
  var Trans = $fam.core.Transform

  var tmp = node.add(new Mod({
      transform: Trans.translate(0, 200, 0),
      size: [200, 200],
      opacity: 0.5,
      origin: [0.5, 0.5],
    })).add(new Mod({
      transform: Trans.rotateZ(Math.PI/6),
    }))

  return tmp
}

