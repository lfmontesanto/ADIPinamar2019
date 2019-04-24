import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import ShowsList from '../components/ShowsList';

import Movies from '../constants/Movies';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={ require('../assets/images/robot-dev.png')}
            style={styles.welcomeImage}
          />
          <Text style={styles.getStartedText}>
            TPO AD Pinamar
          </Text>
        </View>
        <ShowsList shows={ Movies }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
