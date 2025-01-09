/** @import { CacheKeys } from './types.js' */
import React, { useEffect, useState } from 'react';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { useFonts } from 'expo-font';
import Footer from './components/Footer.jsx';
import { DBContext, defaultDB, getData } from './db.js';
import axios from 'axios';
import './global.css';

const BASE_URL = 'http://13.229.202.42:5000/api';
// axios.defaults.baseURL = 'http://13.229.202.42:5000/api';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    // @ts-expect-error
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'), // @ts-expect-error
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'), // @ts-expect-error
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'), // @ts-expect-error
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // @ts-expect-error
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'), // @ts-expect-error
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'), // @ts-expect-error
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'), // @ts-expect-error
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), // @ts-expect-error
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), // @ts-expect-error
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  });
  const [loading, setLoading] = useState(true);
  const [db, setDB] = useState(defaultDB);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const [uRes, fRes, mRes, rRes, bRes, aRes, faRes] = await Promise.all([
      axios.get(`${BASE_URL}/users`),
      axios.get(`${BASE_URL}/fields`),
      axios.get(`${BASE_URL}/lfgs`),
      axios.get(`${BASE_URL}/reviews`),
      axios.get(`${BASE_URL}/bookings`),
      axios.get(`${BASE_URL}/amenities`),
      axios.get(`${BASE_URL}/field_amenities`)
    ]);

    for (let i = 0; i < mRes.data.length; i++) {
      const m = mRes.data[i];
      if (!db.bookings.some((b) => b.lfg_id === m.lfg_id)) {
        axios.delete(`${BASE_URL}/lfgs/${m.lfg_id}`);
      }
    }

    const user = await getData('client_user');
    setDB((prev) => ({
      ...prev,

      users: uRes.data,
      fields: fRes.data,
      matches: mRes.data,
      reviews: rRes.data,
      bookings: bRes.data,
      amenities: aRes.data,
      fieldAmenities: faRes.data,

      view: { user },

      update: function (/** @type {CacheKeys} */ key, /** @type {object} */ value) {
        setDB((prev) => ({ ...prev, view: { ...prev.view, [key]: value } }));
      }
    }));

    setLoading(false);
  }

  if (!fontsLoaded && !error) return null;

  return (
    <GluestackUIProvider mode="light">
      <DBContext.Provider value={db}>{!loading && <Footer />}</DBContext.Provider>
    </GluestackUIProvider>
  );
}
