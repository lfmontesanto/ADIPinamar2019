import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ReviewList from "../components/ReviewList";
import ApiController from "../controller/ApiController";

export default class MyReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:{},
      loading : false,
      user: {}
    };
  }
  componentWillMount(){
    const api = ApiController;
    const {state} = this.props.navigation;
    api.getUserActivity(state.params.userEmail).then(response => {
       this.setState({reviews : response})
    });
  }
  render() {
    const trigger = this.constructor.name;
    return (
      <ScrollView style={styles.mainContainer}>
        <ReviewList reviews={this.state.reviews} trigger={trigger} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  }
});
