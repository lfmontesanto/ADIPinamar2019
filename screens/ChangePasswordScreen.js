import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

import ApiController from "../controller/ApiController";

export default class ChangePasswordScreen extends Component {
    state = {
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      };
      
      handleNewPassword2 = text => {
        this.state.newPassword2 = text;
      };
      handleNewPassword = text => {
        this.state.newPassword = text;
      };
      handleOldPassword = text => {
        this.state.oldPassword = text;
      };
  changePassword = (email, oldPassword, newPassword) => {
    const { navigate } = this.props.navigation;
    const api = ApiController;
    api.getUser(email).then((response) =>{
        if (response.ok == true) {
            var userID = response.userid
            api.registerUser(userID, password, name, lastname).then((response) =>{
                if (response.ok == true) {
                  alert("Password changed");
                  navigate("Login")
                } else {
                  alert("Error changing password ");
                }
              })
        } else {
          alert("Error changing password  ");
        }
      })   
    
  };
  
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
 
  render() {
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Old Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleOldPassword}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="New Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleNewPassword}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="New Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleNewPassword2}
        />
    
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            if ((!(!this.state.email || /^\s*$/.test(this.state.email))) && !((!this.state.password || /^\s*$/.test(this.state.password)))) {
              if (this.state.newPassword == this.state.newPassword2){
                this.changePassword( "", this.state.oldPassword,this.state.newPassword) 
              } else {
                alert("New password doesn't match");
              }
            } else {
              alert("Invalid password format");
            }  
          }}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
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
