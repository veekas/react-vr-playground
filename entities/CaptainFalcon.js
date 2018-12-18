import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class CaptainFalcon extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('captainFalcon/cf.obj'),
          mtl: asset('captainFalcon/cf.mtl')}}
        style={{
          transform: [
            { rotateY: 180 },
            { translateX: 150 },
            { translateY: -200 },
            { translateZ: -400 },
            { scaleY: 250 },
            { scaleX: 250 },
          ]
        }}
      />
    );
  }
}
