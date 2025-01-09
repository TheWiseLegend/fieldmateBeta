import React, { useContext } from 'react';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import StadiumViewInfo from '../components/StadiumViewInfo.jsx';
import Facilities from '../components/Facilities.jsx';
import BookCard from '../components/BookCard.jsx';
import Reviews from '../components/Reviews.jsx';
import Header from '../components/Header.jsx';
import { DBContext } from '../db.js';
import { FontFamily, Color } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function StadiumView({}) {
  const db = useContext(DBContext);

  if (!db.view.field) return <Text>No field to view</Text>;

  return (
    <View id="stadium-view-screen" className="screen" style={styles.stadiumView}>
      <Header style={styles.header} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          style={styles.banner}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/field.png')}
        />
        <Text style={styles.name}>{db.view.field?.field_name || 'NAME'}</Text>

        <Reviews rating={db.view.field?.rating || 0} />

        <Facilities field={db.view.field} />

        <StadiumViewInfo field={db.view.field} />
        <BookCard field={db.view.field} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stadiumView: {
    flex: 1,
    width: '110%',
    alignItems: 'center',
    backgroundColor: Color.surface
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  scrollContainer: {
    paddingTop: 60
  },
  banner: {
    height: 200,
    width: '100%',
    margin: 0,
    padding: 0,
    alignSelf: 'stretch'
  },
  name: {
    marginTop: 10,
    marginLeft: 16,
    width: '70%',
    fontSize: 26,
    fontWeight: '700',
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansBold
  }
});
