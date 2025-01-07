import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontSize, FontFamily, Color, Border } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function WeekdaysDatePicker({}) {
  return (
    <View style={styles.weekdaysDatePicker}>
      <View style={styles.calendarDate}>
        <Text style={styles.m}>M</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>T</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>W</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>T</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>F</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>S</Text>
      </View>

      <View style={styles.calendarDate}>
        <Text style={styles.m}>S</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  m: {
    height: '100%',
    width: '100%',
    top: '0%',
    left: '0%',
    fontSize: FontSize.caption_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.caption,
    color: Color.onSurfaceMediumEmphasis,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  calendarDate: {
    width: 53,
    height: 53
  },
  weekdaysDatePicker: {
    top: 297,
    left: -2,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surface,
    width: 434,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 0,
    position: 'absolute'
  }
});
