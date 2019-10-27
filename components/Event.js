import React, { Component } from 'react';
import { Button } from 'react-native';

export default class Event extends Component {
  onPress = () => {
    alert(this.props.event.key);
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
