import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons.js';
import HomeComponent from '../screens/Home.js';
import StadiumsComponent from '../screens/Stadiums.js';
import MatchesComponent from '../screens/Matches.js';
import LoginComponent from './Login.jsx';
import RegistrationComponent from './Registration.jsx';
import StadiumViewComponent from '../screens/StadiumView.js';
import BookingComponent from '../screens/Booking.js';
import PaymentComponent from '../screens/Payment.js';

const HomeName = 'Home';
const StadiumsName = 'Stadiums';
const MatchesName = 'Matches';
const LoginName = 'Login';
const RegistrationName = 'Registration';
const StadiumViewName = 'Stadium View';
const BookingName = 'Booking';
const PaymentName = 'Payment';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * @param {object} props
 */
function StadiumStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StadiumsName} component={StadiumsComponent} />
      <Stack.Screen name={StadiumViewName} component={StadiumViewComponent} />
      <Stack.Screen name={BookingName} component={BookingComponent} />
      <Stack.Screen name={PaymentName} component={PaymentComponent} />
    </Stack.Navigator>
  );
}

/**
 * @param {object} props
 */
function LoginStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LoginName} component={LoginComponent} />
      <Stack.Screen name={RegistrationName} component={RegistrationComponent} />
    </Stack.Navigator>
  );
}

/**
 * @param {object} props
 */
export default function Footer({}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={StadiumsName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const rn = route.name;
            let iconName = 'home';

            if (rn === StadiumsName) iconName = 'soccer-field';
            else if (rn === MatchesName) iconName = 'soccer';
            else if (rn === LoginName) iconName = 'login';

            // @ts-expect-error
            return <MaterialCommunityIcons name={iconName} size={size + 4} color={color} />;
          },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { height: 60, paddingBottom: 5 },
          headerShown: false
        })}
      >
        <Tab.Screen name={HomeName} component={HomeComponent} />
        <Tab.Screen name={StadiumsName} component={StadiumStack} />
        <Tab.Screen name={MatchesName} component={MatchesComponent} />
        <Tab.Screen name={LoginName} component={LoginStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
