import React from 'react';
import { StyleSheet, View } from 'react-native';
import StadiumCard from '../components2/StadiumCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import Filters2 from '../components2/Filters2.jsx';
import { Color, Border } from '../GlobalStyles.js';

export default function Stadiums() {
  return (
    <View id="stadiums-screen" className="screen" style={styles.stadiums}>
      <Header />

      <Filters />

      <Filters2 />

      <View style={styles.frameParent}>
        <StadiumCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameParent: {
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 307,
    width: 417,
    gap: 14,
    left: 0
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
