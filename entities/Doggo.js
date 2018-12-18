import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Doggo extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('doggo/doggo.obj'),
          mtl: asset('doggo/doggo.mtl')}}
        style={{
          transform: [
            { rotateX: 90 },
            { rotateY: 180 },
            { translateX: 90 },
            { translateY: 140 },
            { translateZ: -100 },
          ]
        }}
      />
    );
  }
}
