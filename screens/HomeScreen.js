import axios from 'axios';
import React, { Component } from 'react';
import EventList from '../components/EventList';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    const { data } = await axios('http://localhost:3000/events');
    this.setState({ events: data });
  }

  state = {
    events: [{ key: 'Loading...' }],
  }

  render() {
    return (
      <EventList
        event={{ events: this.state.events }}
        parents={[]}
      />
    )
  }
}
