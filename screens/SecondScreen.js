import React from 'react';
import { StyleSheet, View , Text} from 'react-native';

import SearchHeader from './SearchHeader'
import ApiController from '../controller/ApiController';
import ShowsList from '../components/ShowsList';

export default class SecondScreen extends React.Component {
 
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      seriesList: [],
      listIsEmptyMessage : ''
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
    return (
      <View style={ styles.container }>
        <SearchHeader 
          style={ styles.searchContainer }
          action={ this.onSearch }
        />
        <Text>{ this.state.isEmptyMessage }</Text> 
        <ShowsList shows={ this.state.seriesList }/>
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
