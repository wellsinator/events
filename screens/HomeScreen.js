import axios from 'axios';
import React, { Component } from 'react';
import EventList from '../components/EventList';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    events: [],
  }

  componentDidMount() {
    this.fetchRootEvents();
  }

  fetchRootEvents = async () => {
    const { data } = await axios('http://localhost:3000/events/root');
    this.setState({ events: data });
  }

  render() {
    return (
      <EventList events={this.state.events}/>
    );
  }
}
