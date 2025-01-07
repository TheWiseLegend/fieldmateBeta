import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WeekdaysDatePicker from '../components2/WeekdaysDatePicker.jsx';
import LFGCard from '../components2/LFGCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import ProfileDrawer from '../components2/Drawer.jsx';
// import FinalButton from '../components2/FinalButton.jsx';
import { Color, Border } from '../GlobalStyles.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Matches() {
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
      data = data.filter((m) => m.status === 'open' && m.required_players > 0);
    } catch (err) {
      console.error('Error fetching matches:', err);
    }

    setMatches(data);
  }

  return (
    <View style={styles.container}>
      <Header onBurgerPress={() => setShowDrawer(true)} style={styles.header} />
      <ProfileDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Filters />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <WeekdaysDatePicker />
          {matches.map((m) => (
            <LFGCard key={m.lfg_id} data={m} />
          ))}
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
  content: {
    flex: 1,
    borderRadius: Border.br_mini,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: Color.surface
  }
});
