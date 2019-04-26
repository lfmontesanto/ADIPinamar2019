import React from "react";
import { View } from "react-native";

import Review from "../components/Review";

export default class ReviewList extends React.Component {
  render() {
    const { trigger } = this.props;
    console.log(this.props)
    return (
      <View>
        {this.props.reviews.map((review, index) => (
          <Review review={review} key={index} trigger={trigger} />
        ))}
      </View>
    );
  }
}
