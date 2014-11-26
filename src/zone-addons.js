
import 'zone.js/except-zone.js'
import 'zone.js/counting-zone.js'
import 'zone.js/long-stack-trace-zone.js'

export var Zone = window.Zone || {}

setTimeout(() => {
  console.log('-------- zone-addons')
}, 100)
export function zoneAddons () {
  console.log('zone-addons')
}
