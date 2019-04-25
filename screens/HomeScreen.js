import React from "react";
import { StyleSheet, View } from "react-native";

import ShowsList from "../components/ShowsList";
import SearchHeader from "./SearchHeader";

import Movies from "../constants/Movies";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <SearchHeader style={styles.searchContainer} />
        <ShowsList shows={Movies} navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff"
  },
  searchContainer: {
    alignItems: "center",
    marginBottom: 10
  }
});
