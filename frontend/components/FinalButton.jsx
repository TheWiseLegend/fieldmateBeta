/** @import { GestureResponderEvent } from 'react-native' */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Color, Border, FontFamily, FontSize, Padding } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {string} props.text
 * @param {(event: GestureResponderEvent) => void} props.onPress
 * @param {boolean} [props.disabled]
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
    letterSpacing: 1,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.surface,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.openSansBold
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
  disabledContainer: {
    opacity: 0.5
  },
  createMatchButton: {
    width: '70%',
    height: 50,
    padding: Padding.p_8xs,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorMediumslateblue
  },
  disabledButton: {
    backgroundColor: 'transparent'
  },
  disabledText: {
    color: Color.colorMediumslateblue
  }
});
