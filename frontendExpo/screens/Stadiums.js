import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Frame3 from '../components/Frame3.js';
import StadiumCard from '../components2/StadiumCard.jsx';
import Header from '../components2/Header.jsx';
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding,
  Gap
} from '../GlobalStyles.js';

export default function Stadiums() {
  return (
    <View style={styles.stadiums}>
      <Header />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/stadium-2.png')}
      />
      <View style={[styles.frameParent, styles.menuButtonFlexBox]}>
        <StadiumCard />
      </View>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/frame3.png')}
      />
      <Frame3 />
      <View style={[styles.frame3, styles.framePosition]}>
        <LinearGradient
          style={styles.frame4}
          locations={[1]}
          colors={['rgba(119, 119, 119, 0.18)']}
        >
          <Image
            style={[styles.commitIcon, styles.iconLayout]}
            contentFit="cover"
            // @ts-expect-error
            source={require('../assets/commit.png')}
          />
          <Text style={[styles.filter, styles.sortTypo]}>Filter</Text>
          <Image
            style={[styles.descendingSortingIcon, styles.iconLayout]}
            contentFit="cover"
            // @ts-expect-error
            source={require('../assets/descending-sorting.png')}
          />
          <Text style={[styles.sort, styles.sortTypo]}>Sort</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButtonFlexBox: {
    justifyContent: 'flex-end',
    position: 'absolute'
  },
  framePosition: {
    alignItems: 'flex-end',
    left: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  frameLayout: {
    height: 39,
    width: 195,
    position: 'absolute'
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
  image2Icon: {
    top: 231,
    left: 16,
    height: 120,
    display: 'none',
    width: 195,
    borderRadius: Border.br_9xs,
    position: 'absolute'
  },
  frameParent: {
    top: 307,
    width: 417,
    gap: 14,
    left: 0
  },
  title: {
    height: '71.79%',
    width: '57.44%',
    top: '7.69%',
    left: '28.21%',
    fontSize: FontSize.title2_size,
    lineHeight: 22,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    letterSpacing: 0,
    position: 'absolute'
  },
  frame2: {
    top: 5,
    left: 113,
    overflow: 'hidden'
  },
  frameIcon1: {
    top: 106,
    width: 418,
    height: 44,
    left: 0,
    position: 'absolute',
    overflow: 'hidden'
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
  },
  stadiumsChild: {
    top: 295,
    left: 61,
    maxHeight: '100%',
    width: 311,
    position: 'absolute'
  },
  stadiums: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.surface,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    flex: 1
  }
});
