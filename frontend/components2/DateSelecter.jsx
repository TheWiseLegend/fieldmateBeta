import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import WeekdaysDatePicker from '../components2/WeekdaysDatePicker.jsx';
import { Color, Border, FontFamily, FontSize, Padding } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function DateSelector({}) {
  return (
    <>
      <View style={styles.calendarDates}>
        <Text style={[styles.x, styles.mTypo]}>All Dates</Text>

        <Text style={[styles.m1, styles.mTypo]}>Clear All</Text>
      </View>

      <View style={styles.month}>
        <View style={[styles.month1, styles.month1FlexBox]}>
          <Text style={styles.subtitle3}>November 2021</Text>

          <Image
            style={styles.icon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/icon.png')}
          />
        </View>
      </View>

      <WeekdaysDatePicker />
    </>
  );
}

const styles = StyleSheet.create({
  x: {
    width: 63
  },
  icon: {
    width: 32,
    height: 32
  },
  subtitle3: {
    fontSize: FontSize.size_lg_6,
    lineHeight: 32,
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
    color: Color.onSurfaceMediumEmphasis,
    textAlign: 'left',
    letterSpacing: 0
  },
  mTypo: {
    height: 53,
    display: 'flex',
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.caption,
    lineHeight: 21,
    letterSpacing: 1,
    fontSize: FontSize.size_base_9,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  month1FlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  month1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  month: {
    top: 234,
    left: -4,
    width: 436,
    paddingLeft: 32,
    paddingTop: 21,
    paddingRight: 48,
    paddingBottom: 16,
    justifyContent: 'center',
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.surface
  },
  m1: {
    width: 96
  },
  calendarDates: {
    top: 184,
    left: -8,
    width: 440,
    paddingHorizontal: 26,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.surface
  }
});
