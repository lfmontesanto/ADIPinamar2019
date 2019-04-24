import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchHeader from './SearchHeader'
import ShowsList from '../components/ShowsList';

import Series from '../constants/Movies';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={ styles.container }>
          <SearchHeader style={ styles.searchContainer }/>
          <ShowsList shows={ Series }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 10,
  }
});
