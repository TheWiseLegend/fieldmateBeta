import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles.js';

export default function Filters({}) {
  return (
    <View
      className="filters2"
      style={[styles.frame3, styles.frame4, styles.framePosition]}
    >
      <Image
        style={[styles.commitIcon, styles.iconLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/commit.png')}
      />
      <Text style={[styles.filter, styles.sortTypo]}>Filter</Text>
      <Image
        style={[styles.descendingSortingIcon, styles.iconLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/descending-sorting.png')}
      />
      <Text style={[styles.sort, styles.sortTypo]}>Sort</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  framePosition: {
    alignItems: 'flex-end',
    left: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  iconLayout: {
    maxWidth: '100%',
    overflow: 'hidden',
    flex: 1
  },
  sortTypo: {
    fontSize: FontSize.buttonText_size,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    letterSpacing: 0
  },
  commitIcon: {
    height: 33
  },
  filter: {
    width: 47
  },
  descendingSortingIcon: {
    height: 24
  },
  sort: {
    flex: 1
  },
  frame4: {
    borderRadius: Border.br_3xs,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 57,
    paddingVertical: 14,
    gap: 54,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    overflow: 'hidden'
  },
  frame3: {
    top: 220,
    width: 431
  }
});
