import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function Filters({}) {
  return (
    <>
      <View style={[styles.matchesChild5, styles.rectangleViewLayout]} />

      <Image
        style={[styles.glyphsTabBarSearch1, styles.glyphsLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/search-location.png')}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/arrow.png')}
      />

      <Text style={[styles.selectState, styles.allCitesTypo]}>
        Select State
      </Text>

      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />

      <Image
        style={[styles.glyphsTabBarSearch, styles.glyphsLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/search-crosshairs.png')}
      />

      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/arrow.png')}
      />

      <Text style={[styles.allCites, styles.allCitesTypo]}>Select City</Text>
    </>
  );
}

const styles = StyleSheet.create({
  rectangleViewLayout: {
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: 'solid',
    bottom: '82.19%',
    top: '13.09%',
    width: '39.53%',
    height: '4.72%',
    borderRadius: Border.br_8xs,
    position: 'absolute'
  },
  allCitesTypo: {
    width: '20.47%',
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    textAlign: 'left',
    letterSpacing: 0,
    position: 'absolute'
  },
  vectorIconLayout: {
    width: '4.14%',
    height: '0.93%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  glyphsLayout: {
    bottom: '83.05%',
    top: '13.95%',
    width: '6.98%',
    height: '3%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  rectangleView: {
    right: '3.49%',
    left: '56.98%'
  },
  matchesChild5: {
    right: '54.42%',
    left: '6.05%'
  },
  allCites: {
    height: '2.04%',
    top: '14.16%',
    left: '65.35%',
    fontSize: FontSize.size_lg
  },
  selectState: {
    height: '6.22%',
    top: '12.66%',
    left: '15.12%'
  },
  vectorIcon3: {
    top: '14.96%',
    right: '6.3%',
    bottom: '84.11%',
    left: '89.56%'
  },
  vectorIcon4: {
    top: '14.91%',
    right: '56.79%',
    bottom: '84.15%',
    left: '39.07%'
  },
  glyphsTabBarSearch: {
    right: '34.42%',
    left: '58.6%'
  },
  glyphsTabBarSearch1: {
    right: '85.58%',
    left: '7.44%'
  }
});
