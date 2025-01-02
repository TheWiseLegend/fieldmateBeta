import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const Frame6 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.date}>
        <Text style={styles.duration}>Duration</Text>
        <View style={[styles.date1, styles.dateLayout]}>
          <Image
            style={styles.backgroundLayout}
            contentFit="cover"
            source={require('../assets/background.png')}
          />
          <Text style={[styles.min, styles.minTypo]}>60 min</Text>
        </View>
      </View>
      <View style={[styles.date2, styles.dateLayout]}>
        <View style={[styles.background, styles.backgroundLayout]} />
        <Text style={[styles.min1, styles.minTypo]}>120 min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateLayout: {
    height: 55,
    width: 132,
    top: 33,
    position: 'absolute'
  },
  minTypo: {
    width: 62,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_sm,
    left: '50%',
    top: 16,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute'
  },
  backgroundLayout: {
    borderRadius: Border.br_7xs,
    height: 55,
    width: 132,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  duration: {
    fontSize: FontSize.buttonText_size,
    color: Color.darkGray,
    width: 96,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    top: 0,
    left: 20,
    position: 'absolute'
  },
  min: {
    marginLeft: -32.4
  },
  date1: {
    left: 33
  },
  date: {
    width: 165,
    left: 0,
    top: 0,
    height: 88,
    position: 'absolute'
  },
  background: {
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1
  },
  min1: {
    marginLeft: -31.4
  },
  date2: {
    left: 226
  },
  frame: {
    top: 226,
    width: 358,
    overflow: 'hidden',
    height: 88,
    left: 20,
    position: 'absolute'
  }
});

export default Frame6;
