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
  static navigationOptions = {
    header: null
  };
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
  register () {
    const { navigate } = this.props.navigation;
    navigate("Register");
    this.setState({password: ""})
    this.setState({email: ""})
  }
  async getUserBody (response) {
    let body = await response.json()
    return body
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
              let data = this.getUserBody(response).then((data) => {
                console.log (data)
                console.log(data.userid)
                this.setState({loading: false}) 
                navigate("HomeTabs", {
                  userEmail: email,
                  userId: data.userid,
                  firstName: data.name,
                  lastName: data.lastname
                })
              }) 
            } 
        })
          this.setState({password: ""})
          this.setState({email: ""})
        } else {
          alert("Usuario/Contraseña incorrectos " + "email: " + email);
          this.setState({loading: false});
        }
      })
    } else {
      this.setState({emailFormatError : true})
      this.setState({loading: false});
    }
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
          mode = {'flat'}
          autoCorrect={false} 
          autoCapitalize="none"
          label="Email"
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <HelperText
          type="error"
          visible= {this.state.emailFormatError}
        >
         Email ingresado invalido!
        </HelperText>
        <PasswordInputText
          value={this.state.password}
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
        <Text style={styles.getStartedText}>
          Not registered yet? Register Now
        </Text>
        <Button
          icon = "add"
          mode = {'contained'}
          compact = {true}
          style={styles.registerButton}
          onPress={() => {
            this.register()
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
    marginTop: 80,    
  },
  getStartedText :{
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
  },
  input: {
    marginTop: 15,
    marginBottom:15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor :"#FFFFFF"
  },
  passInput: {
    margin: 15,
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
  submitButtonText: {
    color: "white"
  },

  registerButton: {
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#7a42f4",
  },
  registerButtonText: {
    color: "white",
    
  }
});
