import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
   }
   handleFirstName = (text) => {
    this.setState({ firstname: text })
 }
   handleLastName = (text) => {
   this.setState({ lastname: text })
 }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }


   login = (email) => {
      alert('Register successful '+'email: ' + email);
   }

   
   loginError = (email) => {
    alert('The registration could not be made, '+'email: ' + email );
 }


   render() {
    const {navigate} = this.props.navigation;
      return (
        <View style = {styles.container}>

   <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "FirstName"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleFirstName}/>


   <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "LastName"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleLastName}/>

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
                   this.loginError(this.state.email)
                  
                   
                   }

                  
                }
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>


          <Text style={styles.getStartedText}>
                           Already registered, go to login
            </Text>


          <TouchableOpacity
              style = {styles.loginButton}
              onPress = {
                () => {
             
                  navigate('Login')
                }
              }>
              <Text style = {styles.loginButtonText}> Login </Text>
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

   loginButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   loginButtonText:{
      color: 'white'
   }
})