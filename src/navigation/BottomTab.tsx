// BottomTab.js
// (Assuming you have different icons for each tab)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chats from '../screens/Chats';
import Account from '../screens/Account';
import Settings from '../screens/Settings';
import { StyleSheet } from 'react-native';
import CustomIcon from '../components/CustomIcon';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [styles.tabContainer],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#02b875',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}
    >
      <BottomTabNavigator.Screen name="Home" component={Home} />
      <BottomTabNavigator.Screen name="Chats" component={Chats} />
      <BottomTabNavigator.Screen name="Account" component={Account} />
      <BottomTabNavigator.Screen name="Settings" component={Settings} />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    margin: 10,
    borderRadius: 10,
  },
});
