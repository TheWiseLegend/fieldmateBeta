import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { StyleSheet } from 'react-native';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 */
export default function Header({}) {
  return (
    <>
      <Octicons
        name="three-bars"
        size={24}
        color="black"
        style={[styles.burgerButton, styles.menuLayout]}
        onPress={() => alert('This is a button!')}
      />

      <Octicons
        name="bell"
        size={24}
        color="black"
        style={styles.doorbellIcon}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/doorbell.png')}
        onPress={() => alert('This is a button!')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  menuLayout: {
    paddingHorizontal: Padding.p_3xs,
    height: 48,
    width: 48,
    borderRadius: Border.br_9xs,
    position: 'absolute',
    overflow: 'hidden'
  },
  doorbellIcon: {
    left: 332,
    width: 40,
    height: 45,
    top: 71,
    position: 'absolute'
  },
  burgerButton: {
    top: 59,
    paddingVertical: Padding.p_xs,
    gap: 7,
    left: 21
  },
  dotIcon: {
    height: '1.29%',
    width: '2.79%',
    top: '6.55%',
    right: '7.67%',
    bottom: '92.17%',
    left: '89.53%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  iconLayout1: {
    maxHeight: '100%',
    position: 'absolute'
  }
});
