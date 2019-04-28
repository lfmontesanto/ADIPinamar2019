import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

import ApiController from "../controller/ApiController";

export default class RegisterScreen extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };
  
  handleFirstName = text => {
    this.setState({ firstname: text });
  };
  handleLastName = text => {
    this.setState({ lastname: text });
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  register = (email, password, name, lastname) => {
    const { navigate } = this.props.navigation;
    const api = ApiController;
    api.registerUser(email, password, name, lastname).then((response) =>{
      if (response.ok == true) {
        alert("User registered " );
        navigate("Login")
      } else {
        alert("Error creating user ");
      }
    })
  };
  
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Nombre"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleFirstName}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Apellido"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleLastName}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Constraseña"
          secureTextEntry = {true}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => {
              if ((!(!this.state.email || /^\s*$/.test(this.state.email))) && !((!this.state.password || /^\s*$/.test(this.state.password)))) {
                if (this.validateEmail(this.state.email)){
                  this.register(this.state.email,this.state.password,this.state.name,this.state.lastname)
                } else {
                  alert("Invalid email format");
                }
              } else {
                alert("Invalid email/password format");
              }  
            }}
          >
            <Text style={styles.mainButtonText}> Enviar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => {
              navigate("Login");
            }}
          >
            <Text style={styles.mainButtonText}> Volver </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#7a42f4",
    textAlign: 'center',
    marginBottom: 50
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch'
  },
  buttonsContainer: {
    flexDirection: 'column',
    marginTop: 30
  },
  mainButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    width: 150
  },
  mainButtonText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
