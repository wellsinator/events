import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  onPress = () => {
    if (this.props.event.events) {
      this.navigateToEvent();
    } else {
      this.saveEvent();
    }
  }

  navigateToEvent = () => {
    this.props.navigation.push('EventScreen', {
      event: this.props.event,
    });
  }

  saveEvent = () => {
    alert(`Added '${this.props.event.key}' event`);
  }

  render() {
    return (
      <Button
        title={this.props.event.key}
        onPress={this.onPress}
      />
    );
  }
}

export default withNavigation(Event);
