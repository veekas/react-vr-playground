import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

import ReactNYCView from './entities/ReactNYCView';
import Doggo from './entities/Doggo';
import CaptainFalcon from './entities/CaptainFalcon';
import Kirby from './entities/Kirby';
import KirbyStage from './entities/KirbyStage';
import Pupper from './entities/Pupper';

const slidesText = [
  "Virtual Reality on the Web with React 360",
  "@veekas everywhere",
  "What is React 360?",
  "open source web VR library managed by Facebook and Oculus",
  "the library formerly known as react-vr (RIP) in early 2017",
  "rebuilt from first principles in 2018",
  "How does it work?",
  "It's built on React Native to work on mobile, web, and VR devices...",
  "including the Oculus VR UI...",
  "and Three.js for lower level 3D rendering in the browser...",
  "and WebVR for browser APIs.",
  "What's great about it?",
  "It's pretty easy!",
  "`npm i -g react-360-cli`",
  "`react-360 init projectName`",
  "`yarn start`",
  "let's see some code!",
  "What's not great about it?",
  "npm package not updated in 8 months",
  "scaleZ???",
  "few primitives",
  "`import Entity from 'Entity'`",
]

export default class ReactVRPlayground extends React.Component {
  state = { slide: 0, totalSlides: slidesText.length };

  nextSlide = () => {
    const { totalSlides } = this.state;

    const nextIndex = this.state.slide + 1;
    const slide = nextIndex < totalSlides ? nextIndex : totalSlides - 1;
    this.setState({ slide });
  }

  prevSlide = () => {
    const previousIndex = this.state.slide - 1;
    const slide = previousIndex >= 0 ? previousIndex : 0;
    this.setState({ slide });
  };

  render() {
    return (
      <View style={ styles.panel }>
        <View style={ styles.greetingBox }>

          <VrButton onClick={this.prevSlide} style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </VrButton>

          <View style={styles.titleView}>
            <Text style={styles.title}>
              {slidesText[this.state.slide]}
            </Text>
          </View>

          <VrButton onClick={this.nextSlide} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>

        </View>
      </View>
    );
  }
};



const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
    width: 40,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  panel: {
    // Fill the entire surface
    width: 900,
    height: 600,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 40,
  },
  titleView: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '80%',
  },
});

AppRegistry.registerComponent('ReactVRPlayground', () => ReactVRPlayground);
AppRegistry.registerComponent('KirbyStage', () => KirbyStage);
AppRegistry.registerComponent('Pupper', () => Pupper);
AppRegistry.registerComponent('Kirby', () => Kirby);
AppRegistry.registerComponent('CaptainFalcon', () => CaptainFalcon);
AppRegistry.registerComponent('Doggo', () => Doggo);
AppRegistry.registerComponent('ReactNYCView', () => ReactNYCView);
