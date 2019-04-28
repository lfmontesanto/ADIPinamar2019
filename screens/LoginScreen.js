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
  getUser = (email) => {
    const api = ApiController;
    api.getUser(email).then((response) => {
      console.log(JSON.stringify(response))
    })
  }
  login = (email,password) => {
    const { navigate } = this.props.navigation;
    const api = ApiController;
    api.login(email,password).then((response) =>{
      console.log(JSON.stringify(response._bodyInit))
      if (response.ok == true) {
        api.getUser(email).then((response) => {
          console.log(JSON.stringify(response))
        }).then((response) => {
          navigate("HomeTabs", {
            user: JSON.parse(response._bodyInit)
          });
        })
      } else {
        alert("/Pass do not match, " + "email: " + email);
      }
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>PelisPedio</Text>
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
              this.getUser(this.state.email)
              //this.login(this.state.email, this.state.password);
            }}
            >
            <Text style={styles.mainButtonText}> Iniciar sesión </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => {
              navigate("Register");
            }}
            >
            <Text style={styles.mainButtonText}> Regístrate </Text>
          </TouchableOpacity>
        </View>
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
