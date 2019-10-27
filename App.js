import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';

const MainNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  EventScreen: EventScreen,
});

const App = createAppContainer(MainNavigator);

export default App;
