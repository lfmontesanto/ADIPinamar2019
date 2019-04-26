import React, { Component } from "react";
import {
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
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="FirstName"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleFirstName}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="LastName"
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
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            if ((!(!this.state.email || /^\s*$/.test(this.state.email))) && !((!this.state.email || /^\s*$/.test(this.state.email)))) {
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
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text style={styles.getStartedText}>
          Already registered, go to login
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={styles.loginButtonText}> Login </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
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
