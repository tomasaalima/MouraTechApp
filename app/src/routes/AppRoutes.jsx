import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Teams } from '../screens/Teams';
import { Home } from '../screens/Home';
import { CreateClass } from '../screens/CreateClass';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='team'
        component={Teams}
      />
      <Screen
        name='class'
        component={CreateClass}
      />
    </Navigator>
  );
}