import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StadiumCard from '../components2/StadiumCard.jsx';
import Header from '../components2/Header.jsx';
import Filters from '../components2/Filters.jsx';
import { Color, Border } from '../GlobalStyles.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Stadiums() {
  /** @type {[object[], React.Dispatch<React.SetStateAction<object[]>>]} */ // @ts-expect-error
  const [fields, setFields] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    /** @type {object[]} */
    let data;

    try {
      data = (await axios.get(`${BASE_URL}/fields`)).data;
      data = data.filter((m) => m.status === 'available');
    } catch (err) {
      console.error('Error fetching matches:', err);
    }

    setFields(data);
  }

  return (
    <View id="stadiums-screen" className="screen" style={styles.stadiums}>
      <Header />

      <Filters />

      <View style={styles.frameParent}>
        {fields.map((f) => (
          <StadiumCard key={f.field_id} data={f} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameParent: {
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 307,
    width: 417,
    gap: 14,
    left: 0
  },
  stadiums: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.surface,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    flex: 1
  }
});
