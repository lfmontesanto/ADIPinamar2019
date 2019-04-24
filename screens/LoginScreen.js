import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email) => {
      alert('Login successfull '+'email: ' + email );
   }


   loginError = (email) => {
      alert('User/Pass do not match, '+'email: ' + email );
   }


   render() {
    const {navigate} = this.props.navigation;
      return (
        <View style = {styles.container}>
          <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Email"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}/>
          <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => {
                   // Validate if user exist
                   //if (responde.data.code==200)
                   if(this.state.email=='carina'){
                      //success
                  this.login(this.state.email)
                  navigate('Home')
                }else{
                   this.loginError(this.state.email)}
                }
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>


          <Text style={styles.getStartedText}>
                           Not registered yet? Register Now
            </Text>


          <TouchableOpacity
              style = {styles.registerButton}
              onPress = {
                () => {
             
                  navigate('Register')
                }
              }>
              <Text style = {styles.registerButtonText}> Register </Text>
          </TouchableOpacity>


       
        </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },

   registerButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   registerButtonText:{
      color: 'white'
   }
})