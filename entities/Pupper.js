import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Pupper extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('pupper/pupper.obj'),
          mtl: asset('pupper/pupper.mtl')}}
        style={{
          transform: [
            { rotateX: 90 },
            { rotateY: 180 },
            { translateX: 60 },
            { translateY: 140 },
            { translateZ: -100 },
          ]
        }}
      />
    );
  }
}
