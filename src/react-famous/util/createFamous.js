'use strict';
var { Famous } = window.BundleNamespace.runtime

var RenderNode = Famous.core.RenderNode
var ElementOutput = Famous.core.ElementOutput
var StateModifier = Famous.modifiers.StateModifier

export default function createFamous(){
  var el = {
    style: {},
    lastStyle: null
  };
  var mod = new StateModifier();
  var elementOutput = new ElementOutput(el);
  var node = new RenderNode(mod);
  node.add(elementOutput);

  return {
    element: el,
    modifier: mod,
    node: node
  };
}

