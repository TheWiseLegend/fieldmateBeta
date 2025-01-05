import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


// import HomeScreenComponent from '../screens/Home.js';
// import StadiumsScreenComponent from '../screens/Stadiums.js';
// import MatchesScreenComponent from '../screens/Matches.js';
import StadiumViewScreenComponent from '../screens/StadiumView.js';
import BookingScreenComponent from '../screens/Booking.js';
import PaymentScreenComponent from '../screens/Payment.js';
import MyActivityScreenComponent from '../screens2/MyActivity.jsx';

const HomeScreen = 'Home';
const StadiumsScreen = 'Stadiums';
const MatchesScreen = 'Matches';
const StadiumViewScreen = 'StadiumView';
const BookingScreen = 'Booking';
const PaymentScreen = 'Payment';
const MyActivityScreen = 'My Activity';

const Tab = createBottomTabNavigator();

/**
 * @param {object} props
 */
export default function Footer({}) {
  return (
    // @ts-expect-error
    <NavigationContainer>
      {/* @ts-expect-error */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const rn = route.name;
            let iconName = 'home';

            if (rn === StadiumsScreen) iconName = 'soccer-field';
            else if (rn === MatchesScreen) iconName = 'soccer';
            else if (rn === MyActivityScreen) iconName = 'calendar-clock';

            return <MaterialCommunityIcons name={iconName} size={size + 4} color={color} />;
          },
          tabBarLabelStyle: { fontSize: 14 }, // Increase label size
          tabBarStyle: { height: 60, paddingBottom: 5 }, // Increase tab bar height
          headerShown: false
        })}
      >
        <Tab.Screen name={HomeScreen} component={HomeScreenComponent} />
        <Tab.Screen name={StadiumsScreen} component={StadiumsScreenComponent} />
        <Tab.Screen name={MatchesScreen} component={MatchesScreenComponent} />
        <Tab.Screen name={MyActivityScreen} component={MyActivityScreenComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
