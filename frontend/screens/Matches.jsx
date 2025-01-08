/** @import { Booking, DayKeys, Field, FullMatch, Match } from '../types.js' */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import DayPicker from '../components/DayPicker.jsx';
import LFGCard from '../components/LFGCard.jsx';
import Header from '../components/Header.jsx';
import Filters from '../components/Filters.jsx';
import { Color, Border } from '../GlobalStyles.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const [state, sort, day] = filters;
    /** @type {FullMatch[]} */
    let filtered = matches;

    if (state) filtered = filtered.filter((m) => m.field.address.toLowerCase().includes(state));

    if (sort === '+price') filtered = filtered.sort((a, b) => a.field.price - b.field.price);
    else if (sort === '-price') filtered = filtered.sort((a, b) => b.field.price - a.field.price);

    if (day)
      filtered = filtered.filter((m) => m.booking && new Date(m.booking.start_datetime).getDay() === dayValues[day]);

    setFilteredMathces(filtered);
  }, [filters]);

  async function fetchData() {
    try {
      const [mRes, bRes, fRes] = await Promise.all([
        axios.get(`${BASE_URL}/lfgs`),
        axios.get(`${BASE_URL}/bookings`),
        axios.get(`${BASE_URL}/fields`)
      ]);

      /** @type {Match[]} */
      let mData = mRes.data;
      /** @type {Booking[]} */
      const bData = bRes.data;
      /** @type {Field[]} */
      const fData = fRes.data.filter((f) => f.status === 'available');

      mData = mData.filter((m) => m.status === 'open' && m.required_players > 0);
      mData = mData.map((m) => {
        const booking = bData.find((b) => b.lfg_id === m.lfg_id);
        const field = fData.find((f) => f.field_id === booking.field_id);
        return { ...m, booking, field };
      });

      // @ts-expect-error
      setMatches(mData);
      // @ts-expect-error
      setFilteredMathces(mData);
    } catch (err) {
      console.error('Error fetching fields and reviews:', err);
    }
  }

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
