/** @import { Field } from './Stadiums.js' */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WeekdaysDatePicker from '../components/WeekdaysDatePicker.jsx';
import LFGCard from '../components/LFGCard.jsx';
import Header from '../components/Header.jsx';
import Filters from '../components/Filters.jsx';
import { Color, Border } from '../GlobalStyles.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Matches() {
  /** @type {[FullMatch[], React.Dispatch<React.SetStateAction<FullMatch[]>>]} */
  const [matches, setMatches] = useState([]);
  /** @type {[FullMatch[], React.Dispatch<React.SetStateAction<FullMatch[]>>]} */
  const [filteredMathces, setFilteredMathces] = useState([]);
  /** @type {[[string, string], React.Dispatch<React.SetStateAction<[string, string]>>]} */
  const [filters, setFilters] = useState(['', '']);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const [state, sort] = filters;
    /** @type {FullMatch[]} */
    let filtered = matches;

    if (state) filtered = filtered.filter((m) => m.field.address.toLowerCase().includes(state));

    if (sort === '+price') filtered = filtered.sort((a, b) => a.field.price - b.field.price);
    else if (sort === '-price') filtered = filtered.sort((a, b) => b.field.price - a.field.price);

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
        const b = bData.find((b) => b.lfg_id === m.lfg_id);
        return { ...m, booking: b, field: fData.find((f) => f.field_id === b.field_id) };
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
    setFilters([state, filters[1]]);
  }

  /**
   * @param {string} sort
   */
  function handleSortChange(sort) {
    setFilters([filters[0], sort]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Filters onStateChange={handleStateChange} onSortChange={handleSortChange} />

      <ScrollView>
        <View style={styles.content}>
          {/* <WeekdaysDatePicker /> */}

          {filteredMathces.map((m) => (
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
  content: {
    flex: 1,
    borderRadius: Border.br_mini,
    width: '100%',
    backgroundColor: Color.surface
  }
});

/**
 * @typedef {Match & {field: Field, booking: Booking}} FullMatch
 */

/**
 * @typedef {object} Match
 * @property {string} lfg_id
 * @property {'open' | 'closed'} status
 * @property {number} required_players
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Booking
 * @property {string} booking_id
 * @property {string} user_id
 * @property {string} field_id
 * @property {string} start_datetime
 * @property {60 | 120} duration
 * @property {string} [lfg_id]
 * @property {number} current_players
 * @property {'pending' | 'confirmed' | 'cancelled'} status
 * @property {string} created_at
 * @property {string} updated_at
 */
