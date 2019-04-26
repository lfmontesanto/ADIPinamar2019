import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ShowsList from '../components/ShowsList';
import SearchHeader from './SearchHeader'
import ApiController from '../controller/ApiController';
import { Snackbar } from 'react-native-paper';


export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      listIsEmptyMessage : '',
      visible : false
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(searchInput) {
    const api = ApiController;
    if (!(!searchInput || /^\s*$/.test(searchInput))) { 
      api.searchOmdb(searchInput).then((response) =>{ 
        if (response.length>0) {
          this.setState ({seriesList : response})
        } else {
          alert("No results found" );
          this.setState(state => ({ visible: !state.visible }))
        }
    })
    } else {
      api.getMoviesHeroku().then((response) =>{
        this.setState ({seriesList : response})
      })
    }
  }
  componentDidMount () {
    const api = ApiController;
    api.getMoviesHeroku().then((response) =>{
      this.setState ({movieList : response})
    })
  }
  render() {
    return (
      <View style={ styles.container }>
      <SearchHeader
        style = { styles.searchContainer }
        action = { this.onSearch }
      />
      <ShowsList shows = { this.state.movieList }/>
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
