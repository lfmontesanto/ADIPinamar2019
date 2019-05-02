import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button
} from "react-native";

import { Avatar, Card} from 'react-native-paper';
import ApiController from "../controller/ApiController";
import ReviewList from "../components/ReviewList";


export default class ShowScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       title: 'PelisPedio',
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#633689'
       }
    }
 }
  constructor(props) {
    super(props);
    this.state = {
      show: {},
      reviews:{},
      loading : false,
      param : "1234",
      userId: "",
    };
  }
  refreshComments(imdb,type){
    const api = ApiController;
    this.setState({loading:true})
    api.getComments(imdb,type)
    .then((response) =>{
      this.setState({reviews : response, loading : true})})
      .then(()=>{this.setState({loading:false})})
  }
  componentWillMount() {
    const api = ApiController;
    const showDetail = this.props.navigation.getParam("show")
    const user = this.props.navigation.getParam("userId")
    this.setState({userId: user})
    this.setState({show: showDetail})
    if (typeof showDetail._id === 'undefined'){
      api.getShowOmdb(showDetail.imdbID).then(response => {
        this.setState({show: response});
      })
    } else {
      this.setState({show: showDetail});
    }
    this.refreshComments(showDetail.imdbID,showDetail.Type)
  }
  render() {
    const { navigation } = this.props;
    const show = this.state.show;
    const user = this.state.userId;
    return (
      <ScrollView style={styles.mainContainer}>
        <Image style={styles.cover} 
         source={(show.Poster == "" )
        ? {uri:'https://www.jainsusa.com/images/store/landscape/not-available.jpg'}
        : {uri: show.Poster}   
         }/>
        <Card style={styles.descContainer}>
          <Text style={styles.title}>{show.Title}</Text>
          <Text style={styles.textNormal}>Valoración: {show.Score}</Text>
          <Text style={styles.textNormal}>Duración: {show.Runtime}</Text>
          <Text style={styles.textNormal}>Año: {show.Year}</Text>
          <Text style={styles.textNormal}>Actores: {show.Actors}</Text>
          <Text style={styles.textNormal}>Director: {show.Director}</Text>
          <Text style={styles.textNormal}>
            Géneros: {show.Genre}
          </Text>
          <Text style={styles.summary}>Sinopsis</Text>
          <Text style={styles.description}>{show.Plot}</Text>
        </Card>
        <View style={styles.reviewsHeader}>
          <Text style={styles.reviews}>Reseñas</Text>
          <Button
            title={"Actualizar"}
            onPress={() => {
                this.refreshComments(this.state.show.imdbID,this.state.show.Type)
            }}
            />
          <Button
            title={"Deja tu reseña"}
            onPress={() => {
              navigation.navigate("Review", {show: show, userID: user, type: show.Type});
            }}
          />
        </View>
        <ReviewList reviews={this.state.reviews}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  cover: {
    height: 500
  },
  descContainer: {
    flexDirection: "column",
    borderBottomWidth: 2,
    borderBottomColor: 633689
  },
  row: {
    flexDirection: "row"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    marginBottom: 15
  },
  textNormal: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap"
  },
  summary: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
    marginBottom: 15,
    textAlign: "justify"
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  reviews: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
