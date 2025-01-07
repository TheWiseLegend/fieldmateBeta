import React, { useState } from 'react';
import MyActivity from '../components/MyActivity';
import Header from '../components/Header';
import ProfileDrawer from '../components/Drawer';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Activity() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View id="activity-screen" className="screen" style={styles.container}>
      <Header onBurgerPress={() => setShowDrawer(true)} />
      <ProfileDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <MyActivity />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5'
  }
});
