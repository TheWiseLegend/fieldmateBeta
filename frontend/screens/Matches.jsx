/** @import { DayKeys, FullMatch } from '../types.js' */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import DayPicker from '../components/DayPicker.jsx';
import LFGCard from '../components/LFGCard.jsx';
import Header from '../components/Header.jsx';
import Filters from '../components/Filters.jsx';
import { Color, Border } from '../GlobalStyles.js';
import { DBContext } from '../db.js';

/** @type {Record<DayKeys, number>} */
const dayValues = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};

export default function Matches() {
  /** @type {[FullMatch[], React.Dispatch<React.SetStateAction<FullMatch[]>>]} */
  const [matches, setMatches] = useState([]);
  /** @type {[FullMatch[], React.Dispatch<React.SetStateAction<FullMatch[]>>]} */
  const [filteredMathces, setFilteredMathces] = useState([]);
  /** @type {[[string, string, string], React.Dispatch<React.SetStateAction<[string, string, string]>>]} */
  const [filters, setFilters] = useState(['', '', '']);
  const db = useContext(DBContext);

  useEffect(() => {
    const fields = db.fields.filter((f) => f.status === 'available');

    /** @type {FullMatch[]} */
    const fullMatches = [];

    for (let i = 0; i < db.matches.length; i++) {
      const m = db.matches[i];

      if (m.status === 'open' && m.required_players > 0) {
        const booking = db.bookings.find((b) => b.lfg_id === m.lfg_id);
        if (!booking) continue;

        const field = fields.find((f) => f.field_id === booking.field_id);
        fullMatches.push({ ...m, booking, field });
      }
    }

    setMatches(fullMatches);
    setFilteredMathces(fullMatches);
  }, []);

  useEffect(() => {
    const [state, sort, day] = filters;

    if (matches.length === 0) return;
    let filtered = matches;

    if (state) filtered = filtered.filter((m) => m.field.address.toLowerCase().includes(state));

    if (sort === '+price') filtered = filtered.sort((a, b) => a.field.price - b.field.price);
    else if (sort === '-price') filtered = filtered.sort((a, b) => b.field.price - a.field.price);

    if (day)
      filtered = filtered.filter((m) => m.booking && new Date(m.booking.start_datetime).getDay() === dayValues[day]);

    setFilteredMathces(filtered);
  }, [filters]);

  /**
   * @param {string} state
   */
  function handleStateChange(state) {
    setFilters([state, filters[1], filters[2]]);
  }

  /**
   * @param {string} sort
   */
  function handleSortChange(sort) {
    setFilters([filters[0], sort, filters[2]]);
  }

  /**
   * @param {DayKeys | null} day
   */
  function handleDayChange(day) {
    setFilters([filters[0], filters[1], day]);
  }

  return (
    <View id="matches-screen" className="screen" style={styles.container}>
      <Header />
      <Filters onStateChange={handleStateChange} onSortChange={handleSortChange} />
      <DayPicker onDayChange={handleDayChange} />

      <ScrollView style={styles.content}>
        {filteredMathces.map((m) => (
          <LFGCard key={m.lfg_id} data={m} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.surface
  },
  content: {
    flex: 1,
    borderRadius: Border.br_mini,
    width: '100%',
    backgroundColor: Color.surface
  }
});
