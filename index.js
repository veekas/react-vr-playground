import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

import CaptainFalcon from './entities/CaptainFalcon';
import Kirby from './entities/Kirby';
import KirbyStage from './entities/KirbyStage';
import Pupper from './entities/Pupper';

const slidesText = [
  "this is page 1",
  "this is page 2",
  "this is page 3",
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
  },
});

AppRegistry.registerComponent('ReactVRPlayground', () => ReactVRPlayground);
AppRegistry.registerComponent('KirbyStage', () => KirbyStage);
AppRegistry.registerComponent('Pupper', () => Pupper);
AppRegistry.registerComponent('Kirby', () => Kirby);
AppRegistry.registerComponent('CaptainFalcon', () => CaptainFalcon);
