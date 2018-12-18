import React from 'react';
import { View } from 'react-360';

export default class ReactNYCView extends React.Component {
  render() {
    return (
      <View style={{
        width: 200,
        height: 200,
        backgroundColor: 'green',
        transform: [
          { rotateX: 90 },
          { translateX: -350 },
        ]
      }}>
      </View>
    );
  }
}
