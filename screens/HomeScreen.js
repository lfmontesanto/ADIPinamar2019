import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShowsList from '../components/ShowsList';
import SearchHeader from './SearchHeader'

import Movies from '../constants/Movies';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={ styles.container }>
        <SearchHeader style={ styles.searchContainer }/>
          <ShowsList shows={ Movies }/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 10,
  }
});
