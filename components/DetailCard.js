import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph,Button,Divider } from 'react-native-paper';

export default class DetailCard extends React.Component {
  render() {
    const show = this.props.show;
    const navigation = this.props.navigation;
    const user = navigation.getParam("userId")
    console.log(user)
    console.log(show)
    return (
      <Card style={styles.cardContainer}
        elevation = {2} 
        onPress={() => {
            navigation.navigate("Show",{show:show, userId:user});
          }}
        >
        <Card.Content style={styles.mainContainer} >
        <Image 
          style={styles.cover} 
          resizeMode={'contain'}
          source={(show.Poster.length === 0 || !show.Poster.trim())
            ? {uri:'https://www.jainsusa.com/images/store/landscape/not-available.jpg'}     
            : {uri: show.Poster}         
          }
         />
          <View style={styles.descContainer}>
              <Title style={styles.title}>{show.Title}</Title>
                {show.Score != undefined &&
                  <Text style={styles.mainText}>Valoración: {show.Score}</Text>
                }
                <Text style={styles.mainText}>Año: {show.Year}</Text>
                {show.Genre &&
                  <Text style={styles.mainText}>Genero: {show.Genre}</Text>
                }
                {show.Plot &&
                  <Paragraph
                    style={styles.description}
                    ellipsisMode="tail"
                    numberOfLines={3}>
                      {show.Plot}
                  </Paragraph>
                }
          </View>
        </Card.Content>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop:5
  },
  cardContainer :{
    marginTop: 5,
    marginBottom:5
  },
  cover: {
    flex:1,
    marginRight: 10,
  },
  descContainer: {
    flex: 1.3,
    flexDirection: "column"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
    marginBottom: 5
  },
  mainText: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap"
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
    marginTop: 10,
    textAlign: "justify"
  }
});
