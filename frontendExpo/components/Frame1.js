import React, { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
const Frame1 = ({ frameTop, frameLeft, pM, pM1, pM2 }) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue('top', frameTop),
      ...getStyleValue('left', frameLeft)
    };
  }, [frameTop, frameLeft]);

  return (
    <View style={[styles.frame, frame1Style]}>
      <View style={styles.date}>
        <View style={[styles.background, styles.date2Position]} />
        <Text style={styles.pm}>{pM}</Text>
      </View>
      <View style={styles.date1}>
        <View style={styles.date2Position}>
          <View style={[styles.background, styles.date2Position]} />
          <Text style={styles.pm}>{pM1}</Text>
        </View>
        <View style={styles.date3}>
          <View style={[styles.background, styles.date2Position]} />
          <Text style={styles.pm}>{pM2}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date2Position: {
    left: 0,
    top: 0,
    height: 47,
    width: 93,
    position: 'absolute'
  },
  background: {
    borderRadius: Border.br_7xs,
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1
  },
  pm: {
    marginLeft: -20,
    top: 14,
    left: '50%',
    fontSize: FontSize.size_3xs,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_200,
    textAlign: 'center',
    width: 44,
    height: 21,
    position: 'absolute'
  },
  date: {
    height: 47,
    width: 93
  },
  date3: {
    left: 117,
    top: 0,
    height: 47,
    width: 93,
    position: 'absolute'
  },
  date1: {
    width: 210,
    height: 47
  },
  frame: {
    top: 475,
    left: 53,
    width: 326,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute'
  }
});

export default Frame1;
