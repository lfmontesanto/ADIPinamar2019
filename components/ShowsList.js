import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import DetailCard from "./DetailCard";

export default class ShowsList extends React.Component {
  render() {
<<<<<<< HEAD
    console.log(this.props.shows)
=======
    const navigation = this.props.navigation;
>>>>>>> 1090b93777fa7ec122e8ba3c35b41085f0c877ae
    return (
      <ScrollView style={styles.mainContainer}>
        {this.props.shows.map((show, index) => (
          <DetailCard show={show} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15
  }
});
