import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Recommendation from '../components/Recommendation.jsx';
import LFGCard from '../components/LFGCard.jsx';
import Header from '../components/Header.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';
import { DBContext } from '../db.js';

export default function Home() {
  /** @type {[object[], React.Dispatch<React.SetStateAction<object[]>>]} */
  const [matches, setMatches] = useState([]);
  const db = useContext(DBContext);

  useEffect(() => {
    const data = db.matches
      .filter((m) => m.status === 'open' && m.required_players > 0)
      .sort((a, b) => a.required_players - b.required_players)
      .slice(0, 2);
    setMatches(data);
  }, []);

  return (
    <View id="home-screen" className="screen" style={styles.container}>
      <Header />
      <Recommendation />
      <Text style={styles.headline}>Matches near you</Text>

      <ScrollView>
        {matches.map((m) => (
          <LFGCard key={m.lfg_id} data={m} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: Border.br_mini,
    backgroundColor: Color.surface
  },
  headline: {
    marginTop: 20,
    left: 20,
    width: '100%',
    fontWeight: '600',
    color: Color.colorBlack,
    fontSize: FontSize.title2_size,
    fontFamily: FontFamily.title1
  }
});
