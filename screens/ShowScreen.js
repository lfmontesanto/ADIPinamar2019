import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button
} from "react-native";

import ReviewList from "../components/ReviewList";

export default class ShowScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const show = navigation.getParam("show");
    const reviews = navigation.getParam("Reviews");
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={{ uri: show.coverSource }} style={styles.cover} />
        <View style={styles.descContainer}>
          <Text style={styles.title}>{show.title}</Text>
          <Text style={styles.textNormal}>Valoración: {show.score}</Text>
          <Text style={styles.textNormal}>Duración: {show.duration} min.</Text>
          <Text style={styles.textNormal}>Año: {show.year}</Text>
          <Text style={styles.textNormal}>Director: {show.director}</Text>
          <Text style={styles.textNormal}>
            Géneros: {show.genre.join(", ")}
          </Text>
          <Text style={styles.summary}>Sinopsis</Text>
          <Text style={styles.description}>{show.description}</Text>
        </View>
        <View style={styles.reviewsHeader}>
          <Text style={styles.reviews}>Reseñas</Text>
          <Button
            title={"Deja tu reseña"}
            onPress={() => {
              navigation.navigate("Review", { show });
            }}
          />
        </View>
        <ReviewList reviews={reviews} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  cover: {
    height: 500
  },
  descContainer: {
    flexDirection: "column",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 633689
  },
  row: {
    flexDirection: "row"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    marginBottom: 15
  },
  textNormal: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap"
  },
  summary: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
    marginBottom: 15,
    textAlign: "justify"
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  reviews: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
