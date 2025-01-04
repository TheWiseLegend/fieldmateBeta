import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function Facilities({}) {
  return (
    <>
      <Text style={[styles.frame, styles.facilities]}>Facilities</Text>

      <View style={styles.frame4}>
        <View style={styles.frame5}>
          <View style={[styles.date, styles.dateFlexBox]}>
            <View style={styles.background} />
            <View style={styles.background} />
            <View style={styles.background} />
            <View style={styles.background} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  frame: {
    top: 406,
    left: 33,
    width: 398,
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden'
  },
  date: {
    width: 260
  },
  frame5: {
    gap: 30,
    flexDirection: 'row',
    height: 54,
    overflow: 'hidden',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frame4: {
    top: 432,
    left: 31,
    width: 400,
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden'
  },
  background: {
    borderRadius: Border.br_7xs,
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 62,
    height: 54
  },
  facilities: {
    fontSize: FontSize.buttonText_size,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkGray,
    width: 169,
    height: 25,
    textAlign: 'left',
    lineHeight: 22
  },
  dateFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
