import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const show = navigation.getParam('show')
    return (
      <ScrollView style={ styles.mainContainer }>
        <Image source={{ uri: show.coverSource }} style={ styles.cover }></Image>
        <View style={ styles.descContainer }>
          <Text style={ styles.title }>{ show.title }</Text>
          <Text style={ styles.textNormal }>Valoración: { show.score }</Text>
          <Text style={ styles.textNormal }>Duración: { show.duration } min.</Text>
          <Text style={ styles.textNormal }>Año: { show.year }</Text>
          <Text style={ styles.textNormal }>Director: { show.director }</Text>
          <Text style={ styles.textNormal }>Géneros: { show.genre.join(', ') }</Text>
          <Text style={ styles.summary }>Sinopsis</Text>
          <Text style={ styles.description }>{ show.description }</Text>
        </View>
        <View style={ styles.commentSection }>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  cover: {
    height: 500,
    marginBottom: 15
  },
  descContainer: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 633689
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  textNormal: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap'
  },
  summary: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 15
  }
});
