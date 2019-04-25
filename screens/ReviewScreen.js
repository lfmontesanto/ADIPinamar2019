import React from "react";
import { ScrollView, Button, Text, TextInput, StyleSheet } from "react-native";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";

export default class ReviewScreen extends React.Component {
  state = {
    film: "",
    comment: ""
  };
  handleFilm = text => {
    this.setState({ film: text });
  };
  handleComment = text => {
    this.setState({ comment: text });
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{"Deja tu reseña"}</Text>
        <TextInput
          style={styles.input2}
          underlineColorAndroid="transparent"
          placeholder="Ingresa un puntaje (Ejemplo: 8.5)"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
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
        <Text style={styles.title}> </Text>
        <Text style={styles.title}> </Text>
        <Button
          title={"Back"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={"Enviar"}
          onPress={() => {
            saveReview();
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center"
  },

  descContainer: {
    flex: 1,
    flexDirection: "column"
  },

  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },

  input2: {
    margin: 80,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },

  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  saveButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  saveButtonText: {
    color: "white"
  },
  backButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  backButtonText: {
    color: "white"
  }
});
