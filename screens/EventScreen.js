import React, { Component } from 'react';
import EventList from '../components/EventList';

export default class HomeScreen extends Component {
  render() {
    return <EventList
      events={this.props.navigation.getParam('events', [])}
      navigation={this.props.navigation}
    />;
  }
}
