import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from "react-native";

import ApiController from "../controller/ApiController";
import { TextInput, Button, HelperText } from 'react-native-paper';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    loading : false,
    emailFormatError :false
  };
  
  handleFirstName = text => {
    this.setState({ firstname: text });
  };
  handleLastName = text => {
    this.setState({ lastname: text });
  };
  handleEmail = text => {
    this.setState({emailFormatError : false})
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  register = (email, password, name, lastname) => {
    const { navigate } = this.props.navigation;
    const api = ApiController;
    this.setState({loading: true})
    api.getUser(email).then((response) =>{
      if (response.status == 404) {
        api.registerUser(email, password, name, lastname).then((response) =>{
          if (response.ok == true) {
            alert("Usuario registrado correctamente" );
            navigate("Login")
          } else {
            alert("Error al crear el usuario. Intente nuevamente ");
          }
        })
      } else if (response.status == 200) {
        alert("El usuario ya existe");
      }
      this.setState({loading: false})
    });
    
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
          mode = {'outlined'}
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          label="Nombre"
          value={this.state.firstname}
          onChangeText={this.handleFirstName}
        />
         <TextInput
          style={styles.input}
          mode = {'outlined'}
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          label="Apellido"
          value={this.state.lastname}
          onChangeText={this.handleLastName}
        />
         <HelperText
          type="error"
          visible= {this.state.emailFormatError}
        >
           Email address is invalid!
        </HelperText>
        <TextInput
          style={styles.input}
          mode = {'outlined'}
          autoCorrect={false} 
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          label="Email"
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <PasswordInputText
          onChangeText={this.handlePassword}
        />
        <Button
          style={styles.submitButton}
          icon = "done"
          compact = {true}
          loading = {this.state.loading}
          mode = {'contained'}
          onPress={() => {
            if ((!(!this.state.email || /^\s*$/.test(this.state.email))) && !((!this.state.password || /^\s*$/.test(this.state.password)))) {
              if (this.validateEmail(this.state.email)){
                this.register(this.state.email,this.state.password,this.state.name,this.state.lastname)
              } else {
                this.setState({emailFormatError : true})
              }
            } else {
              alert("Formato de Email/Contraseña invalidos");
            }  
          }}
        >
          <Text style={styles.submitButtonText}> REGISTRAR </Text>
        </Button>
        <Text style={styles.getStartedText}>
          Already registered, go to login
        </Text>
        <Button
          icon = "add"
          mode = {'contained'}
          compact = {true}
          style={styles.loginButton}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={styles.loginButton}> LOG IN </Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : 40
  },
  input: {
    marginBottom: 45,
    marginTop : 0,
    marginLeft : 15,
    marginRight : 15
  },
  inputEmail:{
    marginBottom: 40,
    marginTop : 0,
    marginLeft : 15,
    marginRight : 15
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    marginTop : 10,
    marginLeft : 60,
    marginRight : 60
  },
  buttonsContainer: {
    flexDirection: 'column',
    marginTop: 30
  },
  loginButton: {
    backgroundColor: "#7a42f4",
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    marginTop : 25,
    marginLeft : 60,
    marginRight : 60
  },
  mainButtonText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
