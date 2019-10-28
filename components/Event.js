import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  onPress = () => {
    if (this.props.event.events) {
      this.goToEvent();
    } else {
      this.saveEvent();
    }
  }

  goToEvent = () => {
    const { navigation, event, parents } = this.props;

    navigation.push('EventScreen', {
      event,
      parents,
    });
  }

  saveEvent = async () => {
    const { navigation, event, parents } = this.props;

    await axios.post('http://localhost:3000/point', {
      path: parents.concat(event.key),
    });

    navigation.navigate('HomeScreen');
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
