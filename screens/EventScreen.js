import axios from 'axios';
import React, { Component } from 'react';
import EventList from '../components/EventList';
import { Button, View } from 'react-native';
import Dialog from "react-native-dialog";

export default class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('event').name,
      headerRight: () => (
        <Button
          onPress={navigation.getParam('showDialog')}
          title="+    "
        />
      ),
    };
  };

  state = {
    events: [],
    dialogVisible: false,
    name: '',
    showPostPointButton: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    const event = navigation.getParam('event');

    this.props.navigation.setParams({
      showDialog: this.showDialog,
    });

    this.fetchEvents(event);
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  hideDialog = () => {
    this.setState({ dialogVisible: false });
  };

  fetchEvents = async (event) => {
    const { data } = await axios.get(`http://localhost:3000/events/${event.id}/children`);

    if (data.length) {
      this.setState({ events: data });
    } else {
      this.setState({ showPostPointButton: true });
    }
  }

  postEvent = async () => {
    const { name } = this.state;

    if (name === '') {
      this.hideDialog();
    } else {
      const event = this.props.navigation.getParam('event');

      await axios.post('http://localhost:3000/events', { name, event });
      this.setState({ name: '' });
      this.hideDialog();
    }
  }

  postPoint = async () => {
    const { navigation } = this.props;
    const event = this.props.navigation.getParam('event');

    await axios.post('http://localhost:3000/points', { event });

    navigation.navigate('HomeScreen');
  }

  render() {
    const eventsView = (
      <View>
        <EventList events={this.state.events}/>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>New Event Name</Dialog.Title>
          <Dialog.Input
            autoFocus={true}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Dialog.Button label="Cancel" onPress={this.hideDialog}/>
          <Dialog.Button label="Submit" onPress={this.postEvent}/>
        </Dialog.Container>
      </View>
    );

    const postPointButton = (
      <Button
        onPress={this.postPoint}
        title="Add Point!"
      />
    );

    return this.state.showPostPointButton ? postPointButton : eventsView;
  }
}
