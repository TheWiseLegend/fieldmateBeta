import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Recommendation from '../components2/Recommendation.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';
import ProfileDrawer from '../components2/Drawer';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Home() {
  /** @type {[object[], React.Dispatch<React.SetStateAction<object[]>>]} */ // @ts-expect-error
  const [matches, setMatches] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage authentication state

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    /** @type {object[]} */
    let data;

    try {
      data = (await axios.get(`${BASE_URL}/lfgs`)).data;
      data = data
        .filter((m) => m.status === 'open' && m.required_players > 0)
        .sort((a, b) => a.required_players - b.required_players)
        .slice(0, 2);
    } catch (err) {
      console.error('Error fetching matches:', err);
    }

    setMatches(data);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View id="home-screen" className="screen" style={styles.home}>
        <Header onBurgerPress={() => setShowDrawer(true)} />
        <ProfileDrawer
          isOpen={showDrawer}
          onClose={() => setShowDrawer(false)}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Recommendation />
        <Text style={[styles.headline, styles.headlineFlexBox]}>Matches near you</Text>
        <View style={styles.marginBottom} />

        {matches.map((m) => (
          <LFGCard key={m.lfg_id} data={m} />
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
