import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Border, FontFamily, FontSize, Padding } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {string} props.text
 */
export default function FinalButton({ text }) {
  return (
    <View style={styles.createMatchButton}>
      <Text style={styles.createMatch}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  createMatch: {
    lineHeight: 22,
    letterSpacing: 0,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.surface,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.openSansBold
  },
  createMatchButton: {
    left: '50%',
    width: '50%',
    height: 45,
    padding: Padding.p_8xs,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorMediumslateblue
  }
});
