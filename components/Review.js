import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Review extends React.Component {
  render() {
    review = this.props.review;
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.header }>
          <Text style={ styles.textBig }>{ review.user }</Text>
          <Text style={ styles.textBig }>Valoración: { review.score }</Text>
        </View>
        <Text style={ styles.textNormal }>Fecha: { review.date }</Text>
        <Text style={ styles.comment }>{ review.comment }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  textBig: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textNormal: {
    fontSize: 14,
  },
  comment: {
    fontSize: 12,
    flexWrap: 'wrap',
    textAlign: 'justify'
  }
})
