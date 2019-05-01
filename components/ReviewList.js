import React from "react";
import { View , ActivityIndicator, Text, StyleSheet, FlatList} from "react-native";
import LottieView from 'lottie-react-native';
import Review from "../components/Review";
import { Subheading } from "react-native-paper";

export default class ReviewList extends React.Component {
  render() {
    const { trigger } = this.props;
    const showProgress = <View><ActivityIndicator size="large" color="#0000ff" /></View>;
    if (this.props.loading) {
        return showProgress
    } else {
        return (
          
        <View style={styles.container}> 
          {
            Array.isArray(this.props.reviews) && this.props.reviews.length
            ? <FlatList
              data={this.props.reviews}
              renderItem={({item}) =>  <Review review={item} trigger={trigger} />}
              keyExtractor={(item, index) => index.toString()}
              /> 
            : <View>
                <Subheading style ={styles.message}>No han realizado comentarios sobre este show todavia. Dejanos el tuyo :)</Subheading>
                <LottieView 
                style ={styles.animation} 
                autoSize = {true} 
                source={require('../assets/animations/629-empty-box.json')} 
                autoPlay loop />
              </View>
          } 
        </View> )
    }
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection : "column",
   paddingTop: 5,
   marginBottom:10
  },
  animation:{
    justifyContent: 'center',
    flex : 1,
    height :300,
    width:300,
  },
  message:{
    flex : 0.5,
    marginLeft:15,
    marginRight:15
  }
})
