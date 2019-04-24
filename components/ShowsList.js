import React from 'react';
import { ScrollView } from 'react-native';
import DetailCard from './DetailCard';

export default class ShowsList extends React.Component {
  render() {
    return (
      <ScrollView>
        {
          this.props.shows.map((show, index) => (
            <DetailCard show={ show } key={ index }></DetailCard>
          ))
        }
      </ScrollView>
    );
  }
}