import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";

import ApiController from "../controller/ApiController"; 
import { TextInput, Button } from "react-native-paper";

export default class UserScreen extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
  };
  componentWillMount() {
    const {state} = this.props.navigation;
    this.setState( {email : state.params.userEmail, firstName:state.params.firstName , lastName:state.params.lastName})
    const api = ApiController;
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Nombre</Text>
         <TextInput
          style={styles.data}
          underlineColorAndroid="transparent"
          disabled = {true}
        >{this.state.firstName}</TextInput>
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Apellido</Text>
         <TextInput
          style={styles.data}
          disabled = {true}
          underlineColorAndroid="transparent"
        >{this.state.lastName}</TextInput>
        <Text
          style={styles.label}
          underlineColorAndroid="transparent"
        >Email</Text>
        <TextInput
          style={styles.data}
          disabled = {true}
          underlineColorAndroid="transparent"
        >{this.state.email}</TextInput>
        <Button
          mode = {'contained'}
          style={styles.submitButton}
          onPress={() => {
            navigate("ChangePassword",
            {userEmail: this.state.email});
          }}
        >
          <Text style={styles.submitButtonText}> Cambiar Contraseña </Text>
        </Button>
        <Button
          mode = {'contained'}
          style={styles.submitButton}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={styles.submitButtonText}> Cerrar Sesion </Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15
  },
  label: {
    marginTop:10,
    marginBottom:10,
    marginRight:20,
    marginLeft:20,
    color : "#9a73ef"
  },data: {
    marginTop:10,
    marginBottom:10,
    marginRight:20,
    marginLeft:20,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    margin: 15,
  },
  submitButtonText: {
    color: "white"
  },

  loginButton: {
    backgroundColor: "#7a42f4",
    margin: 15,
  },
  loginButtonText: {
    color: "white"
  }
});
