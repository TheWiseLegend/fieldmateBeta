import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FrameComponent from '../components/FrameComponent.js';
import BookCard from '../components/BookCard.js';
import Header from '../components2/Header.jsx';
import Facilities from '../components2/Facilities.jsx';
import Reviews from '../components2/Reviews.jsx';
import { FontFamily, Color, Border } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function StadiumView({}) {
  const json = localStorage.getItem('field_view');
  /** @type {object} */
  const data = json
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
        source={require('../assets/image-5.png')}
      />
      <Text style={styles.stadiumName}>{data.field_name}</Text>

      <Reviews />

      <Facilities />

      <FrameComponent />
      <BookCard data={data} />
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
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    top: 0,
    left: 0,
    height: 244,
    width: '100%',
    maxWidth: '100%',
    alignSelf: 'stretch',
    overflow: 'hidden',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stadiumName: {
    height: 34,
    fontSize: 26,
    lineHeight: 24,
    letterSpacing: 0,
    top: 260,
    left: '5%',
    width: '80%',
    justifyContent: 'center',
    position: 'absolute',
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansBold,
    fontWeight: '700',
    textAlign: 'left'
  }
});
