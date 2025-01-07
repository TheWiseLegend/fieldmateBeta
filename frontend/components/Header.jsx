import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { StyleSheet, View } from 'react-native';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 * @param {Function} [props.onBurgerPress]
 */
export default function Header({ onBurgerPress }) {
  return (
    <View style={styles.header}>
      <Octicons
        name="three-bars"
        size={24}
        color="black"
        style={styles.burgerButton}
        // onPress={onBurgerPress}
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    position: 'relative',
    flexDirection: 'row'
  },
  burgerButton: {
    top: 59,
    left: 21,
    width: 48,
    height: 48,
    gap: 7,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    position: 'absolute',
    overflow: 'hidden'
  },
  doorbellIcon: {
    top: 71,
    left: 332,
    width: 40,
    height: 45,
    position: 'absolute'
  }
});
