import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import MarketPlace from './screens/marketPlace';
import ProfileScreen from './screens/profileScreen';
import ProfileCard from './components/profileCard';
import NotificationScreen from './screens/notificationScreen';
import NotificationCard from './components/notificationCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {AntDesign, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
   
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home';
      } else if (route.name === 'MarketPlace') {
        iconName = focused ? 'shop' : 'shop';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'user' : 'user';
      } else if (route.name === 'Notification') {
        iconName = focused ? 'notifications-off' : 'notifications-off';
      }

      // You can return any component that you like here!
      return <Entypo name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#1A73E4',
    tabBarIconInactiveTintColor: 'black',
    
  })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MarketPlace" component={MarketPlace} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
              
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
