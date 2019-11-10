import axios from 'axios';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';

export default class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Points',
    };
  };

  state = {
    points: [],
  };

  fetchPoints = async () => {
    const { data } = await axios.get('http://localhost:3000/points');
    this.setState({ points: data });
  }

  render() {
    const pointName = (point) => {
      let name = point.event.name;
      for (let i = 0; i < point.event.ancestors.length; i++) {
        name = point.event.ancestors[i].name + ' - ' + name;
      }
      name = name + ' - ' + new Date(point.date).toString().slice(0, -15);
      return name;
    };

    return (
      <View>
        <NavigationEvents
          onWillFocus={() => this.fetchPoints()}
        />
        <FlatList
          data={this.state.points}
          renderItem={({ item }) => <Text>{pointName(item)}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
