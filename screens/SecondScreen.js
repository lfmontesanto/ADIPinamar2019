import React from 'react';
import { StyleSheet, View , TouchableOpacity, Text} from 'react-native';

import SearchHeader from './SearchHeader'
import ApiController from '../controller/ApiController';
import Series from '../constants/Movies';

export default class SecondScreen extends React.Component {
 
  static navigationOptions = {
    header: null,
  };

  render() {
    const api = ApiController;
    const comment = {title:"Titanic2", username:"facu2", comment:"meh", score:"1"};
    var obj = []
    return (
      <View style={ styles.container }>
          <SearchHeader style={ styles.searchContainer }/>

          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {() => { 
                api.commentMovie(comment).then((response) =>{
                  console.log(response)
                })
              } }
          >
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  setDataArray (response) {
      
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 10,
  }
});
