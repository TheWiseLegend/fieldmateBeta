import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreenComponent from '../screens/Home.js';
import StadiumsScreenComponent from '../screens/Stadiums.js';
import MatchesScreenComponent from '../screens/Matches.js';
import LoginComponent from '../components2/Login.jsx';
import RegistrationComponent from '../components2/Registration.jsx';
// import StadiumViewScreenComponent from '../screens/StadiumView.js';
// import BookingScreenComponent from '../screens/Booking.js';
// import PaymentScreenComponent from '../screens/Payment.js';

const HomeScreen = 'Home';
const StadiumsScreen = 'Stadiums';
const MatchesScreen = 'Matches';
const LoginScreen = 'Login';
const RegistrationScreen = 'Registration';
// const StadiumViewScreen = 'StadiumView';
// const BookingScreen = 'Booking';
// const PaymentScreen = 'Payment';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * @param {object} props
 */
function LoginStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LoginScreen} component={LoginComponent} />
      <Stack.Screen name={RegistrationScreen} component={RegistrationComponent} />
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
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const rn = route.name;
            let iconName = 'home';

            if (rn === StadiumsScreen) iconName = 'soccer-field';
            else if (rn === MatchesScreen) iconName = 'soccer';
            else if (rn === LoginScreen) iconName = 'login';

            // @ts-expect-error
            return <MaterialCommunityIcons name={iconName} size={size + 4} color={color} />;
          },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { height: 60, paddingBottom: 5 },
          headerShown: false
        })}
      >
        <Tab.Screen name={HomeScreen} component={HomeScreenComponent} />
        <Tab.Screen name={StadiumsScreen} component={StadiumsScreenComponent} />
        <Tab.Screen name={MatchesScreen} component={MatchesScreenComponent} />
        <Tab.Screen name={LoginScreen} component={LoginStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
