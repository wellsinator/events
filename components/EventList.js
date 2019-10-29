import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Event from '../components/Event';

export default class EventList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.event.events || []}
        renderItem={({ item }) => (
          <Event
            event={item}
            path={this.props.path}
          />
        )}
      />
    );
  }
}
