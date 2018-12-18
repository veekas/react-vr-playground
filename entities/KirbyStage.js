import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class KirbyStage extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('kirbyStage/betastage_kirby.obj'),
          mtl: asset('kirbyStage/betastage_kirby.mtl')
        }}
        style={{
          transform: [
            { rotateY: 270 },
            { scaleX: 1.6 },
            { scaleY: 1.6 },
          ]
        }}
      />
    );
  }
}
