// TODO: explain the purpose of this file

import * as $famous from 'famous'

var FamSurface = $famous.core.Surface
export class Surface extends FamSurface {
  constructor (str) {
    super()
    this.setContent(str)
  }
}

// https://coderwall.com/p/iprsng/convert-snake-case-to-camelcase
function _snakeToCamel(s){
  return s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase()})
}

var _frag = document.createElement('div')
export class Style {
  constructor (obj) {

    if ('string' === typeof obj) {

      _frag.style.cssText = obj

      var obj = {}
      var len = _frag.style.length
      var style = _frag.style

      // just selecting the relevant css properties.
      for (let i = 0; i < len; i++) {
        let prop = _snakeToCamel(style[i])
        obj[prop] = style[prop]
      }
    }

    this.properties = obj
  }
}
