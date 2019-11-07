import axios from 'axios';
import React, { Component } from 'react';
import EventList from '../components/EventList';
import { Button, View } from 'react-native';
import Dialog from "react-native-dialog";

export default class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const event = navigation.getParam('event');

    return {
      title: event ? event.name : 'Home',
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
    this.props.navigation.setParams({ showDialog: this.showDialog });
    this.fetchEvents();
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  hideDialog = () => {
    this.setState({
      dialogVisible: false,
      name: '',
    });
  };

  fetchEvents = async () => {
    const event = this.props.navigation.getParam('event');
    event ? this.fetchChildEvents(event) : this.fetchRootEvents();
  }

  fetchChildEvents = async (event) => {
    this.setState({ showPostPointButton: false });

    const { data } = await axios.get(`http://localhost:3000/events/${event.id}/children`);

    if (data.length) {
      this.setState({ events: data });
    } else {
      this.setState({ showPostPointButton: true });
    }
  }

  fetchRootEvents = async () => {
    const { data } = await axios('http://localhost:3000/events/root');
    this.setState({ events: data });
  }

  postEvent = async () => {
    const { name } = this.state;

    if (name !== '') {
      const event = this.props.navigation.getParam('event');
      await axios.post('http://localhost:3000/events', { event, name });
      await this.fetchEvents();
    }

    this.hideDialog();
  }

  postPoint = async () => {
    const { navigation } = this.props;
    const event = navigation.getParam('event');

    await axios.post('http://localhost:3000/points', { event });
    navigation.popToTop();
  }

  render() {
    const eventsView = <EventList events={this.state.events}/>;
    const postPointButton = <Button onPress={this.postPoint} title="Add Point!"/>;

    return (
      <View>
        {this.state.showPostPointButton ? postPointButton : eventsView}
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
  }
}
