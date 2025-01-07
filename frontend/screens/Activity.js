import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from '../components/ui/button';
import MyActivity from '../components2/MyActivity';
import Header from '../components2/Header';
import ProfileDrawer from '../components2/Drawer';

export default function Activity() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage authentication state

  return (
    <>
      <Header onBurgerPress={() => setShowDrawer(true)} />
      <ProfileDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <MyActivity />;
    </>
  );
}
