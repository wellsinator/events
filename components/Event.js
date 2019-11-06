import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  onPress = () => {
    const { navigation, event } = this.props;
    navigation.push('EventScreen', { event });
  }

  render() {
    return (
      <Button
        title={this.props.event.name}
        onPress={this.onPress}
      />
    );
  }
}

export default withNavigation(Event);
