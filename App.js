import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EventScreen from './screens/EventScreen';

const MainNavigator = createStackNavigator({
  EventScreen: EventScreen,
});

const App = createAppContainer(MainNavigator);

export default App;
