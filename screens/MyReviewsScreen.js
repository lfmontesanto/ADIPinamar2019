import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ReviewList from "../components/ReviewList";

import Reviews from "../constants/Reviews";

export default class MyReviews extends React.Component {
  render() {
    const trigger = this.constructor.name;
    return (
      <ScrollView style={styles.mainContainer}>
        <ReviewList reviews={Reviews} trigger={trigger} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  }
});
