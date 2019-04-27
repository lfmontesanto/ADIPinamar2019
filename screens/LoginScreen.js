import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import ApiController from "../controller/ApiController";

class Inputs extends Component {
  state = {
    email: "",
    password: ""
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email,password) => {
    const { navigate } = this.props.navigation;
    const api = ApiController;
    api.login(email,password).then((response) =>{
      if (response.ok == true) {
        navigate("HomeTabs", {
          userEmail: email
        });
      } else {
        alert("User/Pass do not match, " + "email: " + email);
      }
    })
  };
  componentWillMount(){
  
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          placeholder="Password"
          secureTextEntry = {true}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
              this.login(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>

        <Text style={styles.getStartedText}>
          Not registered yet? Register Now
        </Text>


        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            navigate("Register");
          }}
        >
          <Text style={styles.registerButtonText}> Register </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default Inputs;

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

  registerButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  registerButtonText: {
    color: "white"
  }
});
