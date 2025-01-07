import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StadiumCard from '../components2/StadiumCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import { Color, Border } from '../GlobalStyles.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

/** @type {[string, string][]} */
const extraFilterSorts = [
  ['Highest Rating', '+rate'],
  ['Lowest Rating', '-rate']
];

export default function Stadiums() {
  /** @type {[RatedField[], React.Dispatch<React.SetStateAction<RatedField[]>>]} */
  const [fields, setFields] = useState([]);
  /** @type {[RatedField[], React.Dispatch<React.SetStateAction<RatedField[]>>]} */
  const [filteredFields, setFilteredFields] = useState([]);
  /** @type {[[string, string], React.Dispatch<React.SetStateAction<[string, string]>>]} */
  const [filters, setFilters] = useState(['', '']);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const [state, sort] = filters;
    /** @type {RatedField[]} */
    let filtered = fields;

    if (state) filtered = filtered.filter((f) => f.address.toLowerCase().includes(state));

    if (sort === '+price') filtered = filtered.sort((a, b) => a.price - b.price);
    else if (sort === '-price') filtered = filtered.sort((a, b) => b.price - a.price);
    else if (sort === '+rate') filtered = filtered.sort((a, b) => a.rating - b.rating);
    else if (sort === '-rate') filtered = filtered.sort((a, b) => b.rating - a.rating);

    setFilteredFields(filtered);
  }, [filters]);

  async function fetchData() {
    try {
      const [fRes, rRes] = await Promise.all([axios.get(`${BASE_URL}/fields`), axios.get(`${BASE_URL}/reviews`)]);

      /** @type {Field[]} */
      let fData = fRes.data.filter((f) => f.status === 'available');
      /** @type {Review[]} */
      const rData = rRes.data;

      // Calculate average rating for each field
      const fieldRatings = rData.reduce((acc, r) => {
        if (!acc[r.field_id]) acc[r.field_id] = [];
        acc[r.field_id].push(r.rating);
        return acc;
      }, {});

      fData = fData.map((f) => {
        const rArr = fieldRatings[f.field_id] || [];
        const avg = rArr.length ? rArr.reduce((a, b) => a + b, 0) / rArr.length : 0;
        return { ...f, rating: avg };
      });

      // @ts-expect-error
      setFields(fData);
      // @ts-expect-error
      setFilteredFields(fData);
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
    <View id="stadiums-screen" className="screen" style={styles.stadiums}>
      <Header />

      <Filters extraSorts={extraFilterSorts} onStateChange={handleStateChange} onSortChange={handleSortChange} />

      <View style={styles.frameParent}>
        {filteredFields.map((f) => (
          <StadiumCard key={f.field_id} data={f} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stadiums: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.surface,
    height: 1200,
    flex: 1
  },
  frameParent: {
    top: '5%'
  }
});

/** @typedef {Field & {rating: number}} RatedField */

/**
 * @typedef {object} Field
 * @property {string} field_id
 * @property {string} vendor_id
 * @property {string} field_name
 * @property {string} address
 * @property {number} capacity
 * @property {number} price
 * @property {'available' | 'unavailable' | 'maintenance'} status
 * @property {string} [maps_id]
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Review
 * @property {string} review_id
 * @property {0 | 1 | 2 | 3 | 4 | 5} rating
 * @property {string} user_id
 * @property {string} field_id
 * @property {string} [review_text]
 * @property {string} created_at
 * @property {string} updated_at
 */
