import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import EventScreen from './screens/EventScreen';
import PointsScreen from './screens/PointsScreen';

const EventStack = createStackNavigator({
  EventScreen: EventScreen,
});

const PointsStack = createStackNavigator({
  PointsScreen: PointsScreen,
});

const App = createAppContainer(
  createBottomTabNavigator(
    {
      Events: EventStack,
      Points: PointsStack,
    },
  )
);

export default App;
