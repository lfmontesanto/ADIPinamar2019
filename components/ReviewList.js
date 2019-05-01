import React from "react";
import { View , ActivityIndicator, Text, StyleSheet, FlatList} from "react-native";

import Review from "../components/Review";

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
            : <Text>No se han realizado comentarios, ingresa el tuyo :)</Text>
          } 
        </View> )
    }
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
   marginBottom:10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
