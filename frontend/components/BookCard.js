/** @import { MyNavigationProp } from './Footer.jsx' */
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
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
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={styles.frameChild} />

          <Text style={[styles.startingFrom, styles.rmFlexBox]}>Price</Text>
          <Text style={[styles.rm, styles.rmFlexBox]}>{data.price} RM</Text>

          <View style={styles.createMatchButton}>
            {/* <Button title="Book" onPress={() => handlePress()} style={[styles.book, styles.bookLayout]} /> */}
            <Text onPress={() => handlePress()} style={[styles.book, styles.bookLayout]}>
              Book
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: 'hidden',
    alignSelf: 'stretch'
  },
  bookLayout: {
    lineHeight: 22,
    letterSpacing: 0
  },
  rmFlexBox: {
    textAlign: 'left',
    position: 'absolute'
  },
  frameChild: {
    top: 0,
    left: 0,
    elevation: 4,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surface,
    borderStyle: 'solid',
    borderColor: Color.colorSilver_200,
    borderWidth: 1,
    width: 418,
    height: 131,
    position: 'absolute'
  },
  book: {
    fontSize: FontSize.size_14xl,
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    color: Color.surface,
    textAlign: 'center',
    display: 'flex',
    width: 119,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createMatchButton: {
    height: '45.78%',
    width: '45.67%',
    top: '22.89%',
    right: '2.81%',
    bottom: '31.33%',
    left: '51.52%',
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorMediumslateblue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Padding.p_8xs,
    alignItems: 'center',
    position: 'absolute'
  },
  rm: {
    height: '60.84%',
    width: '41.15%',
    top: '39.16%',
    left: '7.17%',
    fontSize: FontSize.size_13xl,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.blue
  },
  startingFrom: {
    height: '33.73%',
    width: '54.78%',
    top: '14.46%',
    left: '5.74%',
    fontSize: FontSize.title1_size,
    fontFamily: FontFamily.secondaryNotActive,
    color: Color.grayIcon,
    lineHeight: 22,
    letterSpacing: 0
  },
  frame1: {
    height: 166
  },
  frame: {
    justifyContent: 'center'
  },
  frameWrapper: {
    top: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
});
