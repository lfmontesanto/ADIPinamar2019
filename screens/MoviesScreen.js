import React from "react";
import { StyleSheet, View } from "react-native";

import ShowsList from "../components/ShowsList";
import SearchHeader from "./SearchHeader";
import ApiController from "../controller/ApiController";

export default class MoviesScreen extends React.Component {
  
  SEARCH_TYPE_MOVIE = "movie"
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      listIsEmptyMessage: "",
      visible: false
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(searchInput) {
    const api = ApiController;
    if (!(!searchInput || /^\s*$/.test(searchInput))) {
      api.searchOmdb(searchInput,this.SEARCH_TYPE_MOVIE).then(response => {
        if (response.length > 0) {
          this.setState({ moviesList: response });
        } else {
          alert("No results found");
          this.setState(state => ({ visible: !state.visible }));
        }
      });
    } else {
      api.getMoviesHeroku().then(response => {
        this.setState({ moviesList: response });
      });
    }
  }
  componentDidMount() {
    const api = ApiController;
    api.getMoviesHeroku().then(response => {
      this.setState({ moviesList: response });
    });
  }
  render() {
    const navigation = this.props.navigation;
    const user = navigation.getParam("userId")
    return (
      <View style={styles.container}>
        <SearchHeader style={styles.searchContainer} action={this.onSearch} />
        <ShowsList style={styles.showListContainer} shows={this.state.moviesList} navigation={navigation} user ={user}/>
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
  },
  showListContainer: {
    alignItems: "center",
    marginTop : 5
  }
});
