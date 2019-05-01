import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph,Divider, Chip, Subheading } from 'react-native-paper';


export default class  Review extends React.Component {
  render() {
    const {review} = this.props;
    const {trigger} = this.props;
    return (
      <Card 
      style={styles.cardContainer}
      elevation = {3} >
        <Card.Content>
          <View style={styles.container} >
              { 
                trigger == 'MyReviews' &&
                <Image 
                  style={styles.cover} 
                  resizeMode={'contain'}
                  source={(review.show.Poster.length === 0 || !review.show.Poster.trim())
                    ? {uri:'https://www.jainsusa.com/images/store/landscape/not-available.jpg'}         
                    : {uri: review.show.Poster}  
                  }
                />
              }
            <View style={styles.header}>
              {
                trigger != 'MyReviews' &&
                review.user!=null ? <Text style={styles.textBig}> {review.user.email} </Text> : <Text></Text>
              }
              {
                trigger == 'MyReviews' &&
                <Title style={styles.textBig}>{review.show.Title}</Title>
              }
              <Subheading style={styles.textBig}>Valoración: {review.score}</Subheading>
              <Text style={styles.textNormal}>Fecha: {review.date}</Text>
              <Divider style= {styles.divider} />
              <Paragraph style={styles.comment}>{review.comment}</Paragraph> 
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  },
  cardContainer :{
    marginTop: 10,
    marginBottom:10
  },
  cover: {
    flex:0.4,
    marginRight: 2,
    
  },
  header: {
    flex : 1,
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 5
  },
  container: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-between",
    marginBottom: 5
  },
  textBig: {
    fontSize: 16,
    fontWeight: "bold"
  },
  textNormal: {
    fontSize: 11
  },
  comment: {
    fontSize: 15,
    flexWrap: "wrap",
    textAlign: "justify"
  },
  divider : {
    marginLeft : 5,
    marginRight : 5,
    marginTop :10,
    marginBottom : 5,
    fontSize : 16,
    fontWeight: "bold",
    backgroundColor: '#7a42f4'

  }
});
