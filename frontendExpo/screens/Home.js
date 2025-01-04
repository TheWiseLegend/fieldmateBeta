import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Recommendation from '../components2/Recommendation.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View id="home-screen" className="screen" style={styles.home}>
        <Header />
        <Recommendation />
        <Text style={[styles.headline, styles.headlineFlexBox]}>
          Matches near you
        </Text>
        <View style={styles.marginBottom} />
        <LFGCard />
        <LFGCard />
        <LFGCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  headlineFlexBox: {
    textAlign: 'left',
    letterSpacing: 0,
  },
  marginBottom: {
    height: 10,
  },
  headline: {
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.colorBlack,
    fontSize: FontSize.title2_size,
    textAlign: 'left',
    letterSpacing: 0,
    marginTop: 20,
  },
  home: {
    backgroundColor: Color.surface,
    flex: 1,
    width: '100%',
    borderRadius: Border.br_mini,
  },
});
