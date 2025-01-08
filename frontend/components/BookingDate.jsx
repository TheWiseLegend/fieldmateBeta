import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize, Color, Border } from '../GlobalStyles';

/**
 * @param {object} props
 */
export default function BookingDate({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date</Text>

      <View style={styles.bg}>
        <Text style={styles.text}>{new Date().toString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 61,
    left: 10,
    width: '100%',
    height: 93
  },
  title: {
    top: 0,
    width: 58,
    fontWeight: '500',
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  bg: {
    top: 20,
    width: 361,
    height: 58,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_7xs
  },
  text: {
    top: 17,
    left: 15,
    width: 219,
    fontWeight: '500',
    color: Color.colorSilver_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium
  }
});
