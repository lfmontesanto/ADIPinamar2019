import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button,StatusBar
} from "react-native";
import ApiController from "../controller/ApiController";

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
      param : "1234"
    };
  }
  componentWillMount() {
    const api = ApiController;
    const showDetail = this.props.navigation.getParam("show")
    if (typeof showDetail._id === 'undefined'){
      api.getShowOmdb(showDetail.imdbID).then(response => {
        this.setState({show: response});
      })
    } else {
      this.setState({show: showDetail});
    }
    api.getComments(showDetail._id,showDetail.Type).then((response) =>{
      if (response ){
        this.setState({reviews : response, loading : true})
      } 
    })
  }
  async setReviews(reviews) {
    await this.setReviews({reviews : reviews})
  }
  render() {
    const { navigation } = this.props;
    const show = this.state.show;
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={{ uri: show.Poster }} style={styles.cover} />
        <View style={styles.descContainer}>
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
        </View>
        <View style={styles.reviewsHeader}>
          <Text style={styles.reviews}>Reseñas</Text>
          <Button
            title={"Deja tu reseña"}
            onPress={() => {
              navigation.navigate("Review", { show, user});
            }}
          />
        </View>
        {console.log("REVIEWS BEFORE SENDING")}
        {console.log(this.state.reviews)}
        {/* {this.state.reviews != undefined &&
          <ReviewList reviews={this.state.reviews}/>
        } */}
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
    padding: 10,
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
