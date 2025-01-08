/** @import { Amenity, Field, FieldAmenity, FullField, Review, User } from '../types.js' */
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import StadiumCard from '../components/StadiumCard.jsx';
import Header from '../components/Header.jsx';
import Filters from '../components/Filters.jsx';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

/** @type {[string, string][]} */
const extraFilterSorts = [
  ['Highest Rating', '+rate'],
  ['Lowest Rating', '-rate']
];

export default function Stadiums() {
  /** @type {[FullField[], React.Dispatch<React.SetStateAction<FullField[]>>]} */
  const [fields, setFields] = useState([]);
  /** @type {[FullField[], React.Dispatch<React.SetStateAction<FullField[]>>]} */
  const [filteredFields, setFilteredFields] = useState([]);
  /** @type {[[string, string], React.Dispatch<React.SetStateAction<[string, string]>>]} */
  const [filters, setFilters] = useState(['', '']);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const [state, sort] = filters;
    /** @type {FullField[]} */
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
      const [fRes, uRes, rRes, aRes, faRes] = await Promise.all([
        axios.get(`${BASE_URL}/fields`),
        axios.get(`${BASE_URL}/users`),
        axios.get(`${BASE_URL}/reviews`),
        axios.get(`${BASE_URL}/amenities`),
        axios.get(`${BASE_URL}/field_amenities`)
      ]);

      /** @type {Field[]} */
      let fData = fRes.data.filter((/** @type {Field} */ f) => f.status === 'available');
      /** @type {User[]} */
      const uData = uRes.data.filter((/** @type {User} */ u) => u.user_role === 'vendor');
      /** @type {Review[]} */
      const rData = rRes.data;
      /** @type {Amenity[]} */
      const aData = aRes.data;
      /** @type {FieldAmenity[]} */
      const faData = faRes.data;

      // Calculate average rating for each field
      const fieldRatings = rData.reduce((acc, r) => {
        if (!acc[r.field_id]) acc[r.field_id] = [];
        acc[r.field_id].push(r.rating);
        return acc;
      }, {});

      const amenities = aData.reduce((acc, a) => {
        acc[a.amenity_id] = a.amenity_name;
        return acc;
      }, {});

      fData = fData.map((f) => {
        const rArr = fieldRatings[f.field_id] || [];
        const avg = rArr.length ? rArr.reduce((a, b) => a + b, 0) / rArr.length : 0;
        const vendor = uData.find((u) => u.user_id === f.vendor_id);
        const facilities = faData.filter((fa) => fa.field_id === f.field_id).map((fa) => amenities[fa.amenity_id]);

        return { ...f, rating: avg, vendor, facilities };
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
    <View id="stadiums-screen" className="screen">
      <Header />
      <Filters extraSorts={extraFilterSorts} onStateChange={handleStateChange} onSortChange={handleSortChange} />

      <ScrollView style={styles.content}>
        {filteredFields.map((f) => (
          <StadiumCard key={f.field_id} field={f} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: '5%'
  }
});
