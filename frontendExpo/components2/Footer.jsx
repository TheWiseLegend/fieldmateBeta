import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreenComponent from '../screens/Home';
import StadiumsScreenComponent from '../screens/Stadiums';
import MatchesScreenComponent from '../screens/Matches';
import MyActivityScreenComponent from '../screens2/MyActivity';

const StadiumsScreen = 'Stadiums';
const MatchesScreen = 'Matches';
const HomeScreen = 'Home';
const MyActivityScreen = 'My Activity';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeScreen) {
              iconName = 'home';
            } else if (rn === StadiumsScreen) {
              iconName = 'soccer-field';
            } else if (rn === MatchesScreen) {
              iconName = 'soccer';
            } else if (rn === MyActivityScreen) {
              iconName = 'calendar-clock';
            }

            // @ts-ignore
            return (
              <MaterialCommunityIcons
                // @ts-expect-error
                name={iconName}
                size={size + 4}
                color={color}
              />
            );
          },
          tabBarLabelStyle: { fontSize: 14 }, // Increase label size
          tabBarStyle: { height: 60, paddingBottom: 5 }, // Increase tab bar height
          headerShown: false
        })}
      >
        <Tab.Screen name="Stadiums" component={StadiumsScreenComponent} />
        <Tab.Screen name="Matches" component={MatchesScreenComponent} />
        <Tab.Screen name="Home" component={HomeScreenComponent} />
        <Tab.Screen name="My Activity" component={MyActivityScreenComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Footer;
