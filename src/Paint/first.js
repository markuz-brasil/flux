import { Inject, annotate } from 'di'
import { Surface, Style } from '../annotations'
import * as tau from '../injectables'

annotate(First, new Surface(`
  <h3> hi from surface 1</h3>
`))

annotate(First, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  border: '2px solid rgb(210, 208, 203)',
  // marginTop: '50px',
  // marginLeft: '50px',
}))

annotate(First, new Style(`
  color: blue;
`))

annotate(First, new Inject(tau.$famous, tau.Context))
export default function First ($fam, context) {
  return context.add(new $fam.modifiers.StateModifier({
      size: [200, 200],
    }))
}
