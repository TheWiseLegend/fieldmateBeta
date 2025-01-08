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
    fontSize: FontSize.buttonText_size,
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    color: Color.surface,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0
  },
  createMatchButton: {
    marginTop: 351,
    marginLeft: -143,
    top: '50%',
    borderRadius: Border.br_20xl,
    width: 293,
    padding: Padding.p_8xs,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 45,
    backgroundColor: Color.colorMediumslateblue,
    left: '50%',
    position: 'absolute'
  }
});
