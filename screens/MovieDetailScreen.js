import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

import DetailCard from '../components/DetailCard';

import Movies from '../constants/Movies';

class Inputs extends Component
{
  
  
  render()
  {
    const {navigate} = this.props.navigation;
    return (

      <View style = {styles.container}>

      

        <ScrollView>
          {
            Movies.map((movie, index) => (
              <DetailCard movie={ movie } key={ index }></DetailCard>
            ))
          }
        </ScrollView>




        <TouchableOpacity
              style = {styles.assessButton}
              onPress = {
                () => {
             
                  navigate('Comment')
                }
              }>
              <Text style = {styles.assessButtonText}> Assess </Text>
          </TouchableOpacity>



        <TouchableOpacity
              style = {styles.backButton}
              onPress = {
                () => {
             
                  navigate('Register')
                }
              }>
              <Text style = {styles.backButtonText}> Back </Text>
          </TouchableOpacity>

          <Text style={styles.getStartedText}>
                           Comments
            </Text>


        </View>
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
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   assessButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   assessButtonText:{
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