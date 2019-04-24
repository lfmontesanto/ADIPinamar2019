import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

export default class DetailCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <View style={ styles.mainContainer }>
        <Image source={{ uri: movie.coverSource }} style={ styles.cover }></Image>
        <View style={ styles.descContainer }>
          <Text style={ styles.title }>{ movie.title }</Text>
          <Text style={ styles.mainText }>Valoración: { movie.score }</Text>
          <Text style={ styles.mainText }>{ movie.genre.join(', ') }</Text>
          <Text
            style={ styles.description }
            ellipsisMode='tail'
            numberOfLines={6}
          >{ movie.description }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  cover: {
    height: 200,
    width: 150,
    marginRight: 10
  },
  descContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  mainText: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap'
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10
  }
});