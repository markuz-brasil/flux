import { Inject, annotate, Provide} from 'di'

import { Surface, Style } from './annotations'
import * as tau from './injectables'

annotate(FirstPaint, new Surface(`
  <h3> hi from surface </h3>
`))

annotate(FirstPaint, new Style({
  backgroundColor: 'rgb(240, 238, 233)',
  textAlign: 'center',
  padding: '5px',
  border: '2px solid rgb(210, 208, 203)',
  marginTop: '50px',
  marginLeft: '50px',
}))

annotate(FirstPaint, new Style(`
  color: blue;
  font-style: italic;
`))

annotate(FirstPaint, new Provide(tau.FirstPaint))
annotate(FirstPaint, new Inject(tau.$famous))
export default function FirstPaint ($fam) {
  return new $fam.core.Surface({
    size: [200, 200],
  })
}
