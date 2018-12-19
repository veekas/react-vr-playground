import React from 'react';
import { View } from 'react-360';

export default class ReactNYCView extends React.Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

































// export default class ReactNYCView extends React.Component {
//   render() {
//     return (
//       <View>
//         <View style={{
//           width: 200,
//           height: 200,
//           backgroundColor: 'green',
//           transform: [
//             { rotateX: 90 },
//             { translateX: -350 },
//           ]
//         }}>
//         </View>
//       </View>
//     );
//   }
// }








// const ReactNYCView = () => <View />;
// export default ReactNYCView;
