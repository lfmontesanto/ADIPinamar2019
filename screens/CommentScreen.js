import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      film: '',
      comment: '',
   }
   handleFilm = (text) => {
    this.setState({ film: text })
 }
   handleComment = (text) => {
   this.setState({ comment: text })
 }


   render() {
    const {navigate} = this.props.navigation;
      return (
        <View style = {styles.container}>

<Text style={styles.getStartedText}>
              Score
            </Text>

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Valorate"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleScore}/>


<Text style={styles.getStartedText}>
            Please let us know your comments
            </Text>


   <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Comment"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleComment}/>

<TouchableOpacity
              style = {styles.saveButton}
              onPress = {
                () => {
                  //guardar solo en el caso que haya completado el puntaje
                  if (handleScore!=null){
                  alert('Thanks for your time!');
                  navigate('MovieDet')}else{
                     alert('Please, fill up the score');   
                  }
                }
              }>
              <Text style = {styles.saveButtonText}> Save Comment </Text>
          </TouchableOpacity>



          <TouchableOpacity
              style = {styles.backButton}
              onPress = {
                () => {
             
                  navigate('MovieDet')
                }
              }>
              <Text style = {styles.backButtonText}> Back </Text>
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
   saveButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   saveButtonText:{
      color: 'white'
   },
   backButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   backButtonText:{
      color: 'white'
   }
})