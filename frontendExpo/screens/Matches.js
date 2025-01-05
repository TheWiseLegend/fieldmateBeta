import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WeekdaysDatePicker from '../components2/WeekdaysDatePicker.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import FinalButton from '../components2/FinalButton.jsx';
import { Color, Border } from '../GlobalStyles.js';

export default function Matches() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <Filters style={styles.filters} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <WeekdaysDatePicker />
          <LFGCard />
          <LFGCard />
          <LFGCard />
          <FinalButton text="Create Match" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.surface
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  filters: {
    position: 'absolute',
    top: 60, // Adjust based on the height of the Header
    left: 0,
    right: 0,
    zIndex: 1
  },

  content: {
    flex: 1,
    borderRadius: Border.br_mini,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: Color.surface
  }
});
