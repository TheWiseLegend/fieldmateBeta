import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Recommendation from '../components2/Recommendation.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import Footer from '../components2/Footer.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

export default function Home() {
  return (
    <View style={styles.home}>
      <Header />
      <Recommendation />
      <Text style={[styles.headline, styles.headlineFlexBox]}>
        Matches near you
      </Text>
      <LFGCard groupViewTop={466} groupViewLeft={10} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  headlineFlexBox: {
    textAlign: 'left',
    letterSpacing: 0
  },
  headline: {
    top: 413,
    left: 12,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.colorBlack,
    fontSize: FontSize.title2_size,
    textAlign: 'left',
    letterSpacing: 0,
    position: 'absolute'
  },
  title2: {
    height: '3%',
    marginLeft: -32,
    top: '6.33%',
    width: 63,
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    left: '50%',
    textAlign: 'left',
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.title2_size
  },
  home: {
    backgroundColor: Color.surface,
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    borderRadius: Border.br_mini
  }
});
