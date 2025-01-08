/** @import { FullField } from '../types.js' */
import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import StadiumViewInfo from '../components/StadiumViewInfo.jsx';
import Facilities from '../components/Facilities.jsx';
import BookCard from '../components/BookCard.jsx';
import Reviews from '../components/Reviews.jsx';
import Header from '../components/Header.jsx';
import { FontFamily, Color } from '../GlobalStyles.js';
import { getData } from '../storage';

/**
 * @param {object} props
 */
export default function StadiumView({}) {
  const [field, setField] = useState({
    field_name: 'NAME',
    address: 'ADDRESS',
    price: 'PRICE'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFieldData() {
      try {
        const json = await getData('field_view');
        if (json) {
          const fieldData = JSON.parse(json);
          console.log('Fetched field data:', fieldData);
          setField(fieldData);
        }
      } catch (error) {
        console.error('Error fetching field data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFieldData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Color.blue} />
      </View>
    );
  }

  return (
    <View id="stadium-view-screen" className="screen" style={styles.stadiumView}>
      <Header style={styles.header} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          style={styles.StadiumBanner}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/field.png')}
        />
        <Text style={styles.stadiumName}>{field.field_name}</Text>
        <Reviews rating={field.rating} />
        <Facilities field={field} />
        <StadiumViewInfo field={field} />
        <BookCard data={field} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stadiumView: {
    flex: 1,
    width: '110%',
    alignItems: 'center',
    backgroundColor: Color.surface,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  scrollContainer: {
    paddingTop: 60, // Adjust based on the height of the Header
  },
  StadiumBanner: {
    height: 200,
    width: '100%',
    margin: 0,
    padding: 0,
    alignSelf: 'stretch',
  },
  stadiumName: {
    marginTop: 10,
    marginLeft: 16,
    width: '70%',
    fontSize: 26,
    fontWeight: '700',
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansBold,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.surface,
  },
});
