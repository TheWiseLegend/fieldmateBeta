import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

export default function Recommendation() {
  return (
    <>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/bg0.png')}
      />

      <View style={styles.month}>
        <Text style={[styles.subtitle3, styles.headlineFlexBox]}>
          What are you looking for?
        </Text>
      </View>

      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/stadium-2.png')}
      />
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Text style={[styles.title1, styles.titleTypo]}>Stadiums</Text>

      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/stadium-2.png')}
      />
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <Text style={[styles.title, styles.titleTypo]}>Matches</Text>
    </>
  );
}

const styles = StyleSheet.create({
  homeChild: {
    top: 195,
    borderRadius: Border.br_smi,
    width: 430,
    height: 215,
    left: 0,
    position: 'absolute'
  },
  month: {
    top: 209,
    left: 18,
    width: 192,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute'
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
  headlineFlexBox: {
    textAlign: 'left',
    letterSpacing: 0
  },
  image3Icon: {
    left: 16
  },
  image4Icon: {
    left: 223
  },
  iconLayout: {
    top: 263,
    height: 120,
    width: 195,
    position: 'absolute',
    borderRadius: Border.br_mini
  },
  homeInner: {
    left: 223
  },
  rectangleView: {
    left: 16
  },
  title: {
    left: '66.51%'
  },
  title1: {
    left: '18.84%'
  },
  homeInnerPosition: {
    opacity: 0.5,
    backgroundColor: Color.colorBlack,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    top: 344,
    height: 39,
    width: 195,
    position: 'absolute'
  },
  titleTypo: {
    color: Color.surface,
    fontSize: FontSize.secondaryNotActive_size,
    top: '37.77%',
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    textAlign: 'left',
    letterSpacing: 0,
    position: 'absolute'
  }
});
