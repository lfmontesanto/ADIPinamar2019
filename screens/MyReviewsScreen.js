import React from "react";
import { StyleSheet, ScrollView,Text } from "react-native";

import ReviewList from "../components/ReviewList";
import ApiController from "../controller/ApiController";
import { Button } from "react-native-paper";

export default class MyReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:{},
      loading : false,
      user: {}
    };
  }
  refreshList(){
    const navigation = this.props.navigation;
    const api = ApiController;
    const user = navigation.getParam("userId")
    this.setState({loading:true})
    api.getUserActivity(user).then(response => {
      this.setState({reviews : response})
   }).then(()=>{ this.setState({loading:false})});
  }
  componentWillMount(){
    this.refreshList()
  }
  render() {
    const trigger = this.constructor.name;
    return (
      <ScrollView style={styles.mainContainer}>
        <ReviewList reviews={this.state.reviews} trigger={trigger} />
        <Button
          style={styles.submitButton}
          compact = {true}
          loading = {this.state.loading}
          mode = {'contained'}
          onPress={() => {
              this.refreshList()
          }}
        >
          <Text style={styles.submitButtonText}> Actualizar </Text>
        </Button>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  submitButton: {
    marginTop: 10,
    marginBottom:5,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#7a42f4",
  },
});
