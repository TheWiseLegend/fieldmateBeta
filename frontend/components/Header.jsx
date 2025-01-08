import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Drawer from './Drawer.jsx';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 */
export default function Header({}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View style={styles.header}>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.profile}>
        <Octicons name="three-bars" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Soon...')} style={styles.doorbell}>
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

  // header: {
  //   top: 50,
  //   width: '100%',
  //   height: 120,
  //   position: 'relative',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: Padding.md,
  //   borderBottomWidth: Border.width,
  //   borderBottomColor: 'black'
  // },
  // profile: {
  //   left: '10%',
  //   width: 48,
  //   height: 48
  // },
  // doorbell: {
  //   // left: '80%',
  //   // right: '10%',
  //   width: 40,
  //   height: 45
  // }
});
