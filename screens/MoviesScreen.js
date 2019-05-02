import React from "react";
import { StyleSheet, View } from "react-native";

import ShowsList from "../components/ShowsList";
import SearchHeader from "./SearchHeader";
import ApiController from "../controller/ApiController";
import LottieView from 'lottie-react-native';
import { ScrollView } from "react-native-gesture-handler";

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
      visible: false,
      loading : false,
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(searchInput) {
    const api = ApiController;
    this.setState({loading : true})
    if (!(!searchInput || /^\s*$/.test(searchInput))) {
      api.searchOmdb(searchInput,this.SEARCH_TYPE_MOVIE).then(response => {
        if  (response === undefined || response.length == 0) {
          alert("No results found");
          this.setState(state => ({ visible: !state.visible }));  
        } else {
          this.setState({ moviesList: response });
        }
      }).then(() => {this.setState({loading : false})}) ;
    } else {
      api.getMoviesHeroku().then(response => {
        this.setState({ moviesList: response });
      }).then(() => {this.setState({loading : false})}) ;
    }
  }
  componentDidMount() {
    this.setState({loading : true})
    const api = ApiController;
    api.getMoviesHeroku().then(response => {
      this.setState({ moviesList: response });
    }).then(()=>{this.setState({loading : false})})
  }
  render() {
    const navigation = this.props.navigation;
    const user = navigation.getParam("userId")
    return (
      <ScrollView style={styles.container}>
        <SearchHeader style={styles.searchContainer} action={this.onSearch} />
        {
          this.state.loading == true 
            ?  <View>
                <LottieView 
                style ={styles.animation} 
                source={require('../assets/animations/2964-material-loading-animation.json')} 
                autoPlay loop />
              </View>
            : <View>
                <ShowsList style={styles.showListContainer} shows={this.state.moviesList} navigation={navigation} user ={user}/>  
              </View>
        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginBottom:20
  },
  searchContainer: {
    alignItems: "center",
  },
  showListContainer: {
    marginTop : 5,
    alignItems: "center",
  },
  animation:{
    flex : 1,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:30,
    height :200,
    width: 200,
  }
});
