// BottomTab.js
// (Assuming you have different icons for each tab)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chats from '../screens/Chats';
import Account from '../screens/Account';
import { StyleSheet } from 'react-native';
import Settings from '../screens/Settings';
import CustomIcon from '../components/CustomIcon';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <BottomTabNavigator.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name='home' size={20} color={focused ? '#02b875' : 'gray'} />
          )
        }}
      />
      <BottomTabNavigator.Screen 
        name="Chats" 
        component={Chats} 
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon iconName='chat' size={20} color={focused ? '#02b875' : 'gray'} />
          )
        }}
      />
      <BottomTabNavigator.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon iconName='account' size={20} color={focused ? '#02b875' : 'gray'} />
          )
        }}
      />
      <BottomTabNavigator.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons name='settings' size={20} color={focused ? '#02b875' : 'gray'} />
          )
        }}  
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    margin: 10,
    borderRadius: 10,
    height: 60
  },
});
