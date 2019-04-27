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
    comment: ""
  };
  handleScore = (text) => {
    this.setState({ score: text });
  }
  handleComment = (text) => {
    this.setState({ comment: text });
  }
  saveReview() {
    const api = ApiController;
    const show = this.props.navigation.getParam("show")
    if(show._id != undefined) {
      if(show.Type == "movie") {
        api.commentMovie(this.props.showId, this.state.comment)
      }
      else {
        api.commentSeries(this.props.showId, this.state.comment)
      }
    } else {
      alert("El show todavía no se encuentra en la base de datos propia")
    }
  }
  render() {
    const navigation = this.props.navigation;
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
            onPress={() => {
              saveReview();
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
