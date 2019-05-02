import React from "react";
import {
  View,
  ScrollView,
  Button,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import ApiController from "../controller/ApiController";

export default class ReviewScreen extends React.Component {
  state = {
    score: "",
    comment: "",
    show:{},
    userId: "",
    type: "",
    buttonDisabled:false
  };
  handleScore = (text) => {
    this.setState({ score: text });
  }
  handleComment = (text) => {
    this.setState({ comment: text });
  }
  saveReview = (score, comment, showId, userId, type) => {
    if ((!(!score || /^\s*$/.test(score))) && (score>0 && score<=10)) {
      const api = ApiController;
      console.log(
        "comment: " + comment,
        "score: " + score,
        "type: " + type,
        "showId" + showId,
        "user" + userId
      )
      api.createShow(this.state.show,this.state.show.Type)
      api.commentShow(showId, comment, score, userId, type).then((response) =>{
        if (response.ok == true) {
          alert("Review saved :) " );
        } else {
          alert("Error saving review");
        }
      }).then(()=>{this.setState({buttonDisabled : false})})
    }
  }
  componentWillMount() {
    const navigation = this.props.navigation;
    const user = navigation.getParam("userID")
    const show = navigation.getParam("show")
    const type = navigation.getParam("type")
    this.setState({type:type })
    this.setState({userId: user})
    this.setState({show: show})
    console.log(show)
    console.log(user)
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>{"Deja tu reseña"}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Ingresa un puntaje (Ejemplo: 8.5)"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={this.handleScore}
        />
        <AutoGrowingTextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Ingresa un comentario"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleComment}
        />
        <View style={styles.buttonWrapper}>
          <Button
            style={styles.buttons}
            title={"Atrás"}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            style={styles.buttons}
            title={"Enviar"}
            disabled={this.state.buttonDisabled}
            onPress={() => {
              this.setState({buttonDisabled : true})
              this.saveReview(this.state.score, this.state.comment, this.state.show.imdbID, this.state.userId, this.state.type);
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    marginVertical: 25
  },
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "stretch"
  },
  buttonWrapper: {
    width: 150,
    marginTop: 30,
    height: 100,
    justifyContent: "space-between",
    borderColor: "black"
  },
  buttons: {
    margin: 10
  }
});
