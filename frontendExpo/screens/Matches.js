import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeekdaysDatePicker from '../components2/WeekdaysDatePicker.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import FinalButton from '../components2/FinalButton.jsx';
import { Color, Border } from '../GlobalStyles.js';

export default function Matches() {
  return (
    <View id="matches-screen" className="screen" style={styles.matches}>
      <Header />

      <Filters />

      <WeekdaysDatePicker />

      <LFGCard />
      <LFGCard groupViewTop={394} groupViewLeft={10} />
      <LFGCard groupViewTop={587} groupViewLeft={15} />

      <FinalButton text="Create Match" />
    </View>
  );
}

const styles = StyleSheet.create({
  matches: {
    borderRadius: Border.br_mini,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: Color.surface
  }
});
