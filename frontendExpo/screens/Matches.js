import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeekdaysDatePicker from '../components2/WeekdaysDatePicker.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap
} from '../GlobalStyles.js';

export default function Matches() {
  return (
    <View style={styles.matches}>
      <Header />
      <LFGCard />
      <Image
        style={[styles.matchesItem, styles.matchesLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-9.png')}
      />
      <LinearGradient
        style={styles.matchesInner}
        locations={[1]}
        colors={['rgba(119, 119, 119, 0.18)']}
      />
      <LFGCard groupViewTop={394} groupViewLeft={10} />
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/vector4.png')}
      />
      {/* <Image
        style={[styles.ellipseIcon, styles.matchesLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      /> */}
      {/* <Image
        style={[styles.vectorIcon1, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/calender.png")}
      /> */}
      <LFGCard groupViewTop={587} groupViewLeft={15} />
      <View style={[styles.createMatchButton, styles.month1FlexBox]}>
        <Text style={styles.createMatch}>Create Match</Text>
      </View>
      <Image
        style={[styles.ellipseIcon, styles.matchesLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-9.png')}
      />
      <Image
        style={[styles.matchesChild2, styles.matchesLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-9.png')}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconChildLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/calender.png')}
      />
      {/* <View style={styles.month}>
        <View style={[styles.month1, styles.month1FlexBox]}>
          <Text style={styles.subtitle3}>November 2021</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/icon.png')}
          />
        </View>
      </View> */}
      <WeekdaysDatePicker />
      <Image
        style={[styles.image2Icon, styles.image2IconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/stadium-2.png')}
      />
      <Image
        style={[styles.chartIcon, styles.iconChildLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/chart.png')}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.matchesChild5, styles.rectangleViewLayout]} />
      <Text style={[styles.allCites, styles.allCitesTypo]}>All Cites</Text>
      <Text style={[styles.selectState, styles.allCitesTypo]}>
        <Text style={styles.select}>{`Select   `}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.state}>State</Text>
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/vector6.png')}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/vector1.png')}
      />
      <Image
        style={[styles.glyphsTabBarSearch, styles.glyphsLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/-glyphs--tab-bar--search1.png')}
      />
      <Image
        style={[styles.glyphsTabBarSearch1, styles.glyphsLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/-glyphs--tab-bar--search.png')}
      />
      {/* <View style={styles.calendarDate}>
        <Text style={[styles.m, styles.mTypo]}>All Dates</Text>
        <Text style={[styles.m1, styles.mTypo]}>Clear All</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image2IconLayout: {
    width: 195,
    position: 'absolute'
  },
  matchesLayout: {
    height: 43,
    width: 41,
    position: 'absolute'
  },
  iconChildLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  month1FlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
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
  mTypo: {
    height: 53,
    display: 'flex',
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.caption,
    lineHeight: 21,
    letterSpacing: 1,
    fontSize: FontSize.size_base_9,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  matchesChild: {
    marginLeft: -98,
    top: 56,
    height: 39,
    borderRadius: Border.br_8xs,
    left: '50%',
    width: 195
  },
  matchesItem: {
    top: 820,
    left: 24
  },
  matchesInner: {
    top: 312,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 430,
    height: 40,
    backgroundColor: 'transparent',
    position: 'absolute'
  },
  vectorIcon: {
    height: '21.67%',
    width: '31.98%',
    top: '-11.05%',
    right: '48.84%',
    bottom: '89.38%',
    left: '19.19%',
    borderRadius: Border.br_10xs,
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  ellipseIcon: {
    top: 446,
    left: 21
  },
  vectorIcon1: {
    height: '2.15%',
    width: '4.19%',
    top: '47.85%',
    right: '75.81%',
    bottom: '50%',
    left: '20%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
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
  },
  matchesChild2: {
    top: 628,
    left: 26
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
  icon: {
    width: 32,
    height: 32
  },
  month1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  month: {
    top: 234,
    left: -4,
    width: 436,
    paddingLeft: 32,
    paddingTop: 21,
    paddingRight: 48,
    paddingBottom: 16,
    justifyContent: 'center',
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.surface
  },
  image2Icon: {
    top: 231,
    left: 16,
    height: 120,
    display: 'none',
    borderRadius: Border.br_9xs
  },
  title: {
    marginLeft: -43,
    top: '6.33%',
    fontSize: FontSize.title2_size,
    width: 85,
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    height: '3%',
    textAlign: 'left',
    lineHeight: 22,
    letterSpacing: 0,
    left: '50%',
    position: 'absolute'
  },
  matchesChild3: {
    height: '1.29%',
    width: '2.79%',
    top: '5.69%',
    right: '7.67%',
    bottom: '93.03%',
    left: '89.53%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  chartIcon: {
    height: '3.22%',
    width: '7.21%',
    top: '88.3%',
    right: '66.28%',
    bottom: '8.48%',
    left: '26.51%',
    maxWidth: '100%',
    maxHeight: '100%',
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
  select: {
    fontSize: FontSize.size_smi
  },
  text: {
    fontSize: FontSize.size_lg
  },
  state: {
    fontSize: FontSize.size_mini
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
  },
  m: {
    width: 63
  },
  m1: {
    width: 96
  },
  calendarDate: {
    top: 184,
    left: -8,
    width: 440,
    paddingHorizontal: 26,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.surface
  },
  matches: {
    borderRadius: Border.br_mini,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: Color.surface
  }
});
