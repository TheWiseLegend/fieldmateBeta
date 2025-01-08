/** @import { DayKeys } from '../types.js' */
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontSize, FontFamily, Color, Border } from '../GlobalStyles.js';

/** @type {DayKeys[]} */
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

/**
 * @param {object} props
 * @param {object} props.onDayChange
 */
export default function DayPicker({ onDayChange }) {
  /** @type {[DayKeys | null, React.Dispatch<React.SetStateAction<DayKeys | null>>]} */
  const [day, setDay] = useState(null);

  /**
   * @param {DayKeys} newKey
   */
  function handleDayPick(newKey) {
    if (day === newKey) newKey = null;

    setDay(newKey);
    onDayChange(newKey);
  }

  return (
    <View style={styles.container}>
      {days.map((d) => (
        <View
          key={d}
          style={{
            ...styles.calendarDate,
            backgroundColor: day === d ? '#6c63ff' : Color.surface
          }}
        >
          <Text
            style={{
              ...styles.m,
              color: day === d ? '#fff' : Color.onSurface
            }}
            onPress={() => handleDayPick(d)}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '12%',
    top: '2%',
    left: '2%',
    right: '2%',
    width: '96%',
    height: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surface
  },
  calendarDate: {
    width: 53,
    height: 53,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorLightgray
  },
  m: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Color.onSurface,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption
  }
});
