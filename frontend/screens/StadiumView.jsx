/** @import { FullField } from './Stadiums.jsx' */
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import StadiumViewInfo from '../components/StadiumViewInfo.jsx';
import Facilities from '../components/Facilities.jsx';
import BookCard from '../components/BookCard.jsx';
import Reviews from '../components/Reviews.jsx';
import Header from '../components/Header.jsx';
import { FontFamily, Color } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function StadiumView({}) {
  const json = localStorage.getItem('field_view');
  /** @type {FullField} */
  const field = json
    ? JSON.parse(json)
    : {
        field_name: 'NAME',
        address: 'ADDRESS',
        price: 'PRICE'
      };

  return (
    <View id="stadium-view-screen" className="screen" style={styles.stadiumView}>
      <Header />

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
    </View>
  );
}

const styles = StyleSheet.create({
  stadiumView: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  StadiumBanner: {
    height: 200,
    width: '100%',
    alignSelf: 'stretch'
  },
  stadiumName: {
    top: '2%',
    left: '5%',
    width: '100%',
    fontSize: 26,
    fontWeight: '700',
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansBold
  }
});
