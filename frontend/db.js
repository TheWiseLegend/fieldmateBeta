/** @import { DB, StorageKeys } from './types.js' */
import { createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @type {DB} */
export const defaultDB = {
  users: [],
  fields: [],
  matches: [],
  reviews: [],
  bookings: [],
  amenities: [],
  fieldAmenities: [],

  view: {},

  update: () => {}
};

/** @type {React.Context<DB>} */
export const DBContext = createContext(defaultDB);

/**
 * @param {StorageKeys} key
 */
export async function getData(key) {
  try {
    let value;

    if (window && window.localStorage) value = localStorage.getItem(key);
    else value = await AsyncStorage.getItem(key);

    return JSON.parse(value);
  } catch (err) {
    console.error('Failed to load user:', err);
  }
}

/**
 * @param {StorageKeys} key
 * @param {any} value
 */
export async function setData(key, value) {
  try {
    if (window && window.localStorage) localStorage.setItem(key, JSON.stringify(value));
    else await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Failed to load user:', err);
  }
}
