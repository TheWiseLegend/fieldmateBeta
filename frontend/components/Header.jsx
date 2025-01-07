/** @import { MyNavigationProp } from './Footer.jsx' */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Octicons from '@expo/vector-icons/Octicons';
import { Padding, Border } from '../GlobalStyles';

/**
 * @param {object} props
 */
export default function Header({}) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Octicons
        name={localStorage.getItem('client_user') === null ? 'sign-in' : 'person-fill'}
        size={24}
        color="black"
        style={styles.profile}
        onPress={() => navigation.navigate('Profile')}
      />

      <Octicons
        name="bell"
        size={24}
        color="black"
        style={styles.doorbell}
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
  profile: {
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
  doorbell: {
    top: 71,
    left: 332,
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
