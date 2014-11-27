
// import * as c0 from 'c0'
import {Injector, Inject, annotate, Provide} from 'di'

import * as tau from './injectables'

var vidProps = {
  ref: 'vid3',
  key: 'vid3',
  height: 200,
  width: 200,
  muted: true,
  loop: true,
  autoPlay: true,
  style: {
    backgroundColor: '#111111'
  },
  src: './dizzy.mp4'
}



annotate(FirstPaint, new Provide(tau.FirstPaint))
annotate(FirstPaint, new Inject(tau.React, tau.Famous, tau.DOM, document))
export function FirstPaint (React, Famous, DOM, $doc) {
  var {Video, Div, Ul, Li, Img, Span} = DOM

  var Timer = Famous.utilities.Timer
  var Transform = Famous.core.Transform
  var Spring = Famous.transitions.SpringTransition

  var Body = React.createClass({
    displayName: 'demo',

    render () {

      if (!this.props.visible) {
        return null;
      }
      var swap = this.state.famous ? 0 : 66;
      var translate = this.state.famous ? 0 : 100;
      var scale = this.state.famous ? 1.2 : 1;
      var anim = {
        method: this.props.animation,
        period: this.props.speed,
        dampingRatio: this.props.dampingRatio
      };

      var swap1Transform = Transitionable(Transform.translate(swap, 0, 0), anim);
      var swap2Transform = Transitionable(Transform.translate(-swap, 0, 0), anim);
      var transformX = Transitionable(Transform.translate(0, translate, 0), anim);
      var transformScale = Transitionable(Transform.scale(scale), anim);

      return (<Div
        style = {{
          backgroundColor: 'red'
        }}
        transform={swap2Transform}
      > oi </Div>) ///
    },

    getDefaultProps () {
      return {
        dampingRatio: 0.5,
        speed: 500,
        animation: Spring,
        visible: true
      };
    },
    getInitialState () {
      return {
        famous: false
      };
    },
    componentDidMount () {
      this.timeout = Timer.setTimeout(this.toggle, this.props.speed*2);
    },

    componentWillUnmount () {
      Timer.clear(this.timeout);
    },

    toggle () {
      this.setState({
        famous: !this.state.famous
      });
      this.timeout = Timer.setTimeout(this.toggle, this.props.speed*2);
    },


  })

  React.initializeTouchEvents(true)
  var app = React.render(<Body />, $doc.body);

  console.log('ppppp')
  return {oi: 'hi'}
}


function Transitionable (value, transition) {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return value;
  }

  if (typeof transition === 'string') {
    transition = {
      method: transition
    };
  }

  return {
    value: value,
    transition: transition
  }
}
