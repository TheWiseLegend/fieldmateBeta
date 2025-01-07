/** @import { MyNavigationProp } from './Footer.jsx' */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Octicons from '@expo/vector-icons/Octicons';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 * @param {Function} [props.onBurgerPress]
 */
export default function Header({ onBurgerPress }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Octicons
        name={localStorage.getItem('client_user') === null ? 'sign-in' : 'person-fill'}
        size={24}
        color="black"
        style={styles.burgerButton}
        onPress={() => navigation.navigate('Profile')}
      />

      <Octicons
        name="bell"
        size={24}
        color="black"
        style={styles.doorbellIcon}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/doorbell.png')}
        onPress={() => alert('Soon...')}
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
