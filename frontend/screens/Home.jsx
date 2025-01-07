import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Recommendation from '../components/Recommendation.jsx';
import LFGCard from '../components/LFGCard.jsx';
import Header from '../components/Header.jsx';
// import ProfileDrawer from '../components/Drawer.jsx';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Home() {
  /** @type {[object[], React.Dispatch<React.SetStateAction<object[]>>]} */
  const [matches, setMatches] = useState([]);
  // const [showDrawer, setShowDrawer] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <ScrollView>
      <View id="home-screen" className="screen" style={styles.home}>
        <Header />
        <Recommendation />
        <Text style={styles.headline}>Matches near you</Text>

        {matches.map((m) => (
          <LFGCard key={m.lfg_id} data={m} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
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
