/** @import { FullField } from '../types.js' */
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StadiumCard from '../components/StadiumCard.jsx';
import Filters from '../components/Filters.jsx';
import Header from '../components/Header.jsx';
import { DBContext } from '../db.js';

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
  const route = useRoute();
  const db = useContext(DBContext);

  useEffect(() => {
    const fields = db.fields.filter((f) => f.status === 'available');
    const users = db.users.filter((u) => u.user_role === 'vendor');

    const fieldRatings = db.reviews.reduce((acc, r) => {
      if (!acc[r.field_id]) acc[r.field_id] = [];
      acc[r.field_id].push(r.rating);
      return acc;
    }, {});

    const amenities = db.amenities.reduce((acc, a) => {
      acc[a.amenity_id] = a.amenity_name;
      return acc;
    }, {});

    const fullFields = fields.map((f) => {
      const rArr = fieldRatings[f.field_id] || [];
      const avg = rArr.length ? rArr.reduce((a, b) => a + b, 0) / rArr.length : 0;
      const vendor = users.find((u) => u.user_id === f.vendor_id);
      const facilities = db.fieldAmenities
        .filter((fa) => fa.field_id === f.field_id)
        .map((fa) => amenities[fa.amenity_id]);

      return { ...f, rating: avg, vendor, facilities };
    });

    setFields(fullFields);
    setFilteredFields(fullFields);
  }, []);

  useEffect(() => {
    const [state, sort] = filters;

    if (fields.length === 0) return;
    let filtered = fields;

    if (state) filtered = filtered.filter((f) => f.address.toLowerCase().includes(state));

    if (sort === '+price') filtered = filtered.sort((a, b) => a.price - b.price);
    else if (sort === '-price') filtered = filtered.sort((a, b) => b.price - a.price);
    else if (sort === '+rate') filtered = filtered.sort((a, b) => a.rating - b.rating);
    else if (sort === '-rate') filtered = filtered.sort((a, b) => b.rating - a.rating);

    setFilteredFields(filtered);
  }, [filters]);

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
      {route.name !== 'Stadium View' && <Header />}
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
    marginBottom: '35%'
  }
});
