import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet
} from "react-native";
import ApiController from "../controller/ApiController";
import PasswordInputText from 'react-native-hide-show-password-input';
import { TextInput, Button, HelperText } from 'react-native-paper';

class Inputs extends Component {
  state = {
    email: "",
    password: "",
    loading : false,
    emailFormatError :false
  };
  handleEmail = text => {
    this.setState({emailFormatError : false})
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  getUser = (email) => {
    const api = ApiController;
    api.getUser(email).then((response) => {
      console.log(JSON.stringify(response))
    })
  }
  login = (email,password) => {
    this.setState({loading: true})
    const { navigate } = this.props.navigation;
    const api = ApiController;
    if (this.validateEmail(email)) {
      api.login(email,password).then((response) =>{
        if (response.ok == true) {
          api.getUser(this.state.email).then((response) =>{
            if (response.ok == true) {
              let data = await response.json()
              /**
               * Object {
                  "email": "charly@hotmail.com",
                  "lastname": "ramallo",
                  "name": "charly",
                  "userid": "5cc30195bb6b590017e5896b",
                }
               */
            }
          }).then(()=>{ this.setState({loading: false})}) 
          navigate("HomeTabs", {
            userEmail: email
          });
        } else {
          alert("User/Pass do not match, " + "email: " + email);
        }
      })
    } else {
      this.setState({emailFormatError : true})
    }
  };
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>PelisPedio</Text>
        <TextInput
        style={styles.input}
          mode = {'flat'}
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          label="Email"
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <HelperText
          type="error"
          visible= {this.state.emailFormatError}
        >
         Email address is invalid!
        </HelperText>
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
              this.login(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.submitButtonText}> INGRESAR </Text>
        </Button>
        <Button
          icon = "add"
          mode = {'contained'}
          compact = {true}
          style={styles.registerButton}
          onPress={() => {
            navigate("Register");
          }}
        >
          <Text style={styles.registerButtonText}> REGISTRARSE </Text>
        </Button>
      </ScrollView>
    );
  }
}
export default Inputs;

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
    backgroundColor :"#FFFFFF"
  },
  passInput: {
    margin: 15,
    borderWidth: 1
  },
  submitButton: {
    marginTop: 15,
    marginBottom:15,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#7a42f4",
  },
  buttonsContainer: {
    flexDirection: 'column',
    marginTop: 30
  },
  registerButton: {
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#7a42f4",
  },
  mainButtonText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
