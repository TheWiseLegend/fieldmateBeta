import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios'
import Recommendation from '../components2/Recommendation.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

const IP_ADDRESS = 'http://13.229.202.42:5000/api'

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    let res;

    try {
      res = await axios.get(`${IP_ADDRESS}/users?limit=1`);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }

    const data = res.data;

    setMatches(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View id="home-screen" className="screen" style={styles.home}>
        <Header />
        <Recommendation />
        <Text style={[styles.headline, styles.headlineFlexBox]}>Matches near you</Text>
        <View style={styles.marginBottom} />

        {matches.map((match, i) => (
          // <LFGCard key={match.lfg_id} match={match} />
          <LFGCard key={i} match={match} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headlineFlexBox: {
    textAlign: 'left',
    letterSpacing: 0
  },
  marginBottom: {
    height: 10
  },
  headline: {
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.colorBlack,
    fontSize: FontSize.title2_size,
    textAlign: 'left',
    letterSpacing: 0,
    marginTop: 20
  },
  home: {
    backgroundColor: Color.surface,
    flex: 1,
    width: '100%',
    borderRadius: Border.br_mini
  }
});
