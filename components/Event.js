import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  onPress = () => {
    this.props.navigation.push('EventScreen', {
      event: this.props.event,
    });
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
