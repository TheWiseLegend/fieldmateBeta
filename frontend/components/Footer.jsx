import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons.js';
import HomeComponent from '../screens/Home.jsx';
import MatchesComponent from '../screens/Matches.jsx';
import StadiumsComponent from '../screens/Stadiums.jsx';
import StadiumViewComponent from '../screens/StadiumView.jsx';
import BookingComponent from '../screens/Booking.jsx';
import PaymentComponent from '../screens/Payment.jsx';
import ProfileComponent from './Profile.jsx';
import LoginComponent from './Login.jsx';
import RegistrationComponent from './Registration.jsx';

/**
 * @typedef {object} MyNavigationProp
 * @property {(screen: Navigations) => void} navigate
 */

/** @typedef {RootNavigations | StadiumsNavigations | ProfileNavigations} Navigations */
/** @typedef {'Home' | 'Matches' | 'Stadiums' | 'Profile'} RootNavigations */
/** @typedef {'Stadiums' | 'Stadium View' | 'Booking' | 'Payment'} StadiumsNavigations */
/** @typedef {'Profile' | 'Login' | 'Registration'} ProfileNavigations */

/** @type {{[key: string]: Navigations}} */
const navigations = {
  Home: 'Home',
  Matches: 'Matches',

  Stadiums: 'Stadiums',
  StadiumView: 'Stadium View',
  Booking: 'Booking',
  Payment: 'Payment',

  Profile: 'Profile',
  Login: 'Login',
  Registration: 'Registration'
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * @param {object} props
 */
export default function Footer({}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navigations.Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const rn = route.name;
            /** @type {any} */
            let iconName = 'home';

            if (rn === navigations.Stadiums) iconName = 'soccer-field';
            else if (rn === navigations.Matches) iconName = 'soccer';
            else if (rn === navigations.Login) iconName = 'login';

            return <MaterialCommunityIcons name={iconName} size={size + 4} color={color} />;
          },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { height: 60, paddingBottom: 5 },
          headerShown: false
        })}
      >
        <Tab.Screen name={navigations.Home} component={ProfileStack} />
        <Tab.Screen name={navigations.Stadiums} component={StadiumStack} />
        <Tab.Screen name={navigations.Matches} component={MatchesComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/**
 * @param {object} props
 */
function StadiumStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigations.Stadiums} component={StadiumsComponent} />
      <Stack.Screen name={navigations.StadiumView} component={StadiumViewComponent} />
      <Stack.Screen name={navigations.Booking} component={BookingComponent} />
      <Stack.Screen name={navigations.Payment} component={PaymentComponent} />
    </Stack.Navigator>
  );
}

/**
 * @param {object} props
 */
function ProfileStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigations.Home} component={HomeComponent} />
      <Stack.Screen name={navigations.Profile} component={ProfileComponent} />
      <Stack.Screen name={navigations.Login} component={LoginComponent} />
      <Stack.Screen name={navigations.Registration} component={RegistrationComponent} />
    </Stack.Navigator>
  );
}
