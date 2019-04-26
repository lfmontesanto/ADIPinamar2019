import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import Reviews from "../constants/Reviews";

export default class DetailCard extends React.Component {
  render() {
    const show = this.props.show;
    const navigation = this.props.navigation;
    return (

      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => {
          navigation.navigate("Show", { show, Reviews });
        }}
      >
        <Image source={{ uri: show.coverSource }} style={styles.cover} />
        <View style={styles.descContainer}>
          <Text style={styles.title}>{show.title}</Text>
          <Text style={styles.mainText}>Valoración: {show.score}</Text>
          <Text style={styles.mainText}>{show.genre.join(", ")}</Text>
          <Text
            style={styles.description}
            ellipsisMode="tail"
            numberOfLines={6}
          >
            {show.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginBottom: 15
  },
  cover: {
    height: 200,
    width: 150,
    marginRight: 10
  },
  descContainer: {
    flex: 1,
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
