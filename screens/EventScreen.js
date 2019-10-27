import React, { Component } from 'react';
import EventList from '../components/EventList';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('event').key,
    };
  };

  render() {
    return <EventList
      event={this.props.navigation.getParam('event', {})}
    />;
  }
}
