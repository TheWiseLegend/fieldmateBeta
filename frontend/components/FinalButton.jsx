import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Color, Border, FontFamily, FontSize, Padding } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {string} props.text
 * @param {function} props.onPress
 * @param {boolean} props.disabled
 */
export default function FinalButton({ text, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.createMatchButton, disabled && styles.disabledButton]}>
        <Text style={[styles.createMatch, disabled && styles.disabledText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createMatch: {
    lineHeight: 35,
    letterSpacing: 0,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.surface,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.openSansBold,
    letterSpacing: 1.5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  disabledContainer: {
    opacity: 0.5,
  },
  createMatchButton: {
    width: '70%',
    height: 50,
    padding: Padding.p_8xs,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorMediumslateblue,
  },
  disabledButton: {
    backgroundColor: 'transparent',
  },
  disabledText: {
    color: Color.colorMediumslateblue,
  },
});
