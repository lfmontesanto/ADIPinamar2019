import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchHeader from './SearchHeader'
import ApiController from '../controller/ApiController';
import ShowsList from '../components/ShowsList';

export default class SeriesScreen extends React.Component {

  SEARCH_TYPE_SERIE="series"

  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      seriesList: [],
      listIsEmptyMessage : '',
      visible: false
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(searchInput) {
    const api = ApiController;
    if (!(!searchInput || /^\s*$/.test(searchInput))) { 
      api.searchOmdb(searchInput,SEARCH_TYPE_SERIE).then((response) =>{ 
        if (response.length>0) {
          this.setState ({seriesList : response})
        } else {
          alert("No results found" );
          this.setState(state => ({ visible: !state.visible }))
        }
    })
    } else {
      api.getSeriesHeroku().then((response) =>{
        this.setState ({seriesList : response})
      })
    }
  }
  componentDidMount () {
    const api = ApiController;
    api.getSeriesHeroku().then((response) =>{
      this.setState ({ seriesList : response})
    })
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style = {styles.container}>
        <SearchHeader 
          style = {styles.searchContainer} action = {this.onSearch}/>
        <ShowsList shows = {this.state.seriesList} navigation = {navigation} />
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
