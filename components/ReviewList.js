import React from "react";
import { View } from "react-native";

import Review from "../components/Review";

export default class ReviewList extends React.Component {
  render() {
    return (
      <View>
        {this.props.reviews.map((review, index) => (
          <Review review={review} key={index} />
        ))}
      </View>
    );
  }
}
