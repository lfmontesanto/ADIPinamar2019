import React from "react";
import { View , ActivityIndicator, Text, StyleSheet, FlatList} from "react-native";

import Review from "../components/Review";

export default class ReviewList extends React.Component {
  render() {
    const { trigger } = this.props;
    const { reviews } = this.props.reviews
    const helloMessage = <View><ActivityIndicator size="large" color="#0000ff" /></View>;
    let message;
    if (this.props.loading) {
        return helloMessage
    } else {
        return (
        <View> 
          {
            Array.isArray(reviews) && reviews.length  
            ? <FlatList
              data={reviews}
              renderItem={({item}) =>  <Review review={item} trigger={trigger} />}
              keyExtractor={(item, index) => index.toString()}
              /> 
            : <Text>No se han realizado comentarios, ingresa el tuyo :)</Text>
          } 
        </View> )
    }
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})