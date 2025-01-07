/** @import { MyNavigationProp } from './Footer.jsx' */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Border, Color, FontSize, FontFamily, Padding } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {object} props.data
 */
export default function BookCard({ data }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Booking');
  }

  return (
    <View style={styles.frameWrapper}>
      <View>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.rm}>{data.price} RM</Text>
      </View>

      <View style={styles.btn}>
        <Text onPress={() => handlePress()} style={styles.book}>
          Book
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameWrapper: {
    top: '5%',
    width: '100%',
    height: 150,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',

    elevation: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorSilver_200,
    backgroundColor: Color.surface,
    borderRadius: Border.br_3xs
  },
  price: {
    top: '15%',
    left: '2%',
    color: Color.grayIcon,
    fontSize: FontSize.title1_size,
    fontFamily: FontFamily.secondaryNotActive
  },
  rm: {
    top: '20%',
    left: '2%',
    fontWeight: '600',
    color: Color.blue,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.title1
  },
  btn: {
    height: '50%',
    width: '45%',
    top: '20%',
    bottom: '20%',
    left: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Padding.p_8xs,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorMediumslateblue
  },
  book: {
    width: '100%',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: Color.surface,
    fontSize: FontSize.size_14xl,
    fontFamily: FontFamily.openSansBold
  }
});
