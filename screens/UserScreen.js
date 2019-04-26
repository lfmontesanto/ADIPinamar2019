import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";

export default class UserScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >First Name</Text>
         <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >valor</Text>
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Last Name</Text>
         <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >valor 2</Text>
         <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Email</Text>
        <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >valor 3</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigate("ChangePassword");
          }}
        >
          <Text style={styles.submitButtonText}> Cambiar Contraseña </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  label: {
    margin: 15,
    color : "#9a73ef"
  },data: {
    margin: 15,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  },

  loginButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  loginButtonText: {
    color: "white"
  }
});
