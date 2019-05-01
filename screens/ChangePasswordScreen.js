import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Button, TextInput} from 'react-native-paper';

import ApiController from "../controller/ApiController";

export default class ChangePasswordScreen extends React.Component {
  state = {
      email: "",
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
      loading : false,
  };

  componentWillMount() {
    const {state} = this.props.navigation;
    this.setState( {email : state.params.userEmail})
  }
      
  handleNewPassword2 = text => {
    this.setState({newPassword2 : text})
  };
  handleNewPassword = text => {
    this.setState({newPassword : text})
  };
  handleOldPassword = text => {
    this.setState({oldPassword : text})
  };
  async getUserBody (response) {
    let body = await response.json()
     return body
  }
  changePassword = (email, oldPassword, newPassword) => {
    this.setState({loading: true})
    const { navigate } = this.props.navigation;
    const api = ApiController;
    api.getUser(this.state.email).then((response) =>{
      if (response.ok == true) {
        let data = this.getUserBody(response).then((data) => {
          if (response.ok == true) {
              var userID = data.userid
              api.updateUserPassword(userID, this.state.oldPassword, this.state.newPassword).then((response) =>{
                  if (response.ok == true) {
                    alert("Cambio de contraseña exitoso");
                    navigate("Login")
                  } else {
                    alert("Error al cambiar la contraseña, intente nuevamente");
                  }
                })
          } else {
            alert("Error al cambiar la contraseña, intente nuevamente");
          }
        })    
      } 
    })
    this.setState({loading: false})
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
          label='Contraseña actual'
          value={this.state.oldPassword}
          secureTextEntry={true}  
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleOldPassword}
        />
        <TextInput
          style={styles.input}
          label='Nueva contraseña'
          value={this.state.newPassword}
          secureTextEntry={true}  
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleNewPassword}
        />
        <TextInput
          style={styles.input}
          label='Nueva contraseña'
          value={this.state.newPassword2}
          secureTextEntry={true}  
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleNewPassword2}
        />
        <Button
          style={styles.submitButton}
          compact = {true}
          loading = {this.state.loading}
          onPress={() => {
            if ((!(!this.state.oldPassword || /^\s*$/.test(this.state.oldPassword))) && !((!this.state.newPassword || /^\s*$/.test(this.state.newPassword)))) {
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
          <Text style={styles.submitButtonText}> Enviar </Text>
        </Button>
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
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    marginLeft : 30,
    marginRight:30
  },
  submitButtonText: {
    color: "white"
  }
});
