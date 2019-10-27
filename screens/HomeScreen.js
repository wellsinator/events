import React, { Component } from 'react';
import EventList from '../components/EventList';

const homeEvent = {
  key: 'Home',
  events: [
    {
      key: 'Alex',
      events: [
        {
          key: 'Why',
        }
      ]
    },
    { key: 'Jill' },
    { key: 'Lennox' },
  ],
};

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: homeEvent.key,
  };

  render() {
    return (
      <EventList event={homeEvent}/>
    )
  }
}
