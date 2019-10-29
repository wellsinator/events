import React, { Component } from 'react';
import EventList from '../components/EventList';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('event').key,
    };
  };

  render() {
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    const path = navigation.getParam('path').concat(event.key);

    return (
      <EventList
        event={event}
        path={path}
      />
    )
  }
}
