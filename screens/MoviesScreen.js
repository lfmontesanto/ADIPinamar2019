import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShowsList from '../components/ShowsList';
import SearchHeader from './SearchHeader'
import ApiController from '../controller/ApiController';

export default class MoviesScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
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
          this.setState ({moviesList : response})
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
    const navigation = this.props.navigation;
    return (
    <View style={ styles.container }>
      <SearchHeader
        style = { styles.searchContainer }
        action = { this.onSearch } />
      />
      <ShowsList shows = { this.state.movieList }
        navigation={navigation}
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff"
  },
  searchContainer: {
    alignItems: "center",
    marginBottom: 10
  }
});
