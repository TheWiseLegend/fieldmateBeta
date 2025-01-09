import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Drawer from './Drawer.jsx';
import NotificationDrawer from '../components/NotificationDrawer.jsx';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 */
export default function Header({}) {
  const [isPDrawerOpen, setIsPDrawerOpen] = useState(false);
  const [isNDrawerOpen, setIsNDrawerOpen] = useState(false);

  return (
    <View style={styles.header}>
      <Drawer isOpen={isPDrawerOpen} onClose={() => setIsPDrawerOpen(false)} />
      <NotificationDrawer isOpen={isNDrawerOpen} onClose={() => setIsNDrawerOpen(false)} />

      <TouchableOpacity onPress={() => setIsPDrawerOpen(!isPDrawerOpen)} style={styles.profile}>
        <Octicons name="three-bars" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsNDrawerOpen(!isNDrawerOpen)} style={styles.doorbell}>
        <Octicons name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    position: 'relative',
    flexDirection: 'row'
  },
  profile: {
    top: 20,
    left: 20,
    width: 48,
    height: 48,
    gap: 7,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    position: 'absolute',
    overflow: 'hidden'
  },
  doorbell: {
    top: 30,
    left: 330,
    width: 40,
    height: 45,
    position: 'absolute'
  }
});
