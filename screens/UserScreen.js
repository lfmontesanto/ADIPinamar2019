import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";

import ApiController from "../controller/ApiController"; 

export default class UserScreen extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
  };
  componentWillMount() {
    const {state} = this.props.navigation;
    this.setState( {email : state.params.userEmail})
    const api = ApiController;
    api.getUser(this.state.email).then((response) =>{
      if (response.ok == true) {
        this.setState( {firstName : response.firstName})
        this.setState( {lastName : response.lastName})
      }
    })
  }
  render() {
    return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >First Name</Text>
         <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >{this.state.firstName}</Text>
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Last Name</Text>
         <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >{this.state.lastName}</Text>
         <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        ></Text>
        <Text
          style={styles.data}
          underlineColorAndroid="transparent"
        >{this.state.email}</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigate("ChangePassword");
          }}
        >
          <Text style={styles.submitButtonText}> Cambiar Contraseña </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={styles.submitButtonText}> Cerrar Sesion </Text>
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
