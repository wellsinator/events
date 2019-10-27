import React, { Component } from 'react';
import EventList from '../components/EventList';

const events = [
  { key: 'Alex' },
  { key: 'Jill' },
  { key: 'Lennox' },
];

export default class HomeScreen extends Component {
  render() {
    return <EventList events={events}/>;
  }
}
