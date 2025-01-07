/** @import { MyNavigationProp } from './Footer.jsx' */
/** @import { RatedField } from '../screens/Stadiums.js' */
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {RatedField} props.data
 */
export default function StadiumCard({ data }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  function handleNavigation() {
    localStorage.setItem('field_view', JSON.stringify(data));
    navigation.navigate('Stadium View');
  }

  return (
    <View style={styles.stadiumCard}>
      <Image
        style={styles.banner}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/field.png')}
      />

      <View style={styles.viewButton}>
        <Button title="View" onPress={() => handleNavigation()} />
      </View>

      <View style={styles.inner}>
        <Text style={styles.name}>{data.field_name || 'NAME'}</Text>

        <View style={styles.row}>
          <Image
            style={styles.locationIcon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/location.png')}
          />
          <Text style={styles.text}>{data.address || 'ADDRESS'}</Text>
        </View>

        <View style={styles.row}>
          <Image
            style={styles.ratingIcon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/star-rate.png')}
          />
          <Text style={styles.text}>{data.rating || 0}/5</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.price}>{data.price || 0} RM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stadiumCard: {
    width: '100%',
    height: 300
  },
  viewButton: {
    top: -10,
    width: '100%',
    position: 'absolute'
  },
  banner: {
    width: '100%',
    height: 150
  },
  inner: {
    padding: 10
  },
  name: {
    lineHeight: 26,
    letterSpacing: 1,
    fontSize: FontSize.secondaryNotActive_size,
    fontFamily: FontFamily.secondaryNotActive
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationIcon: {
    left: 3,
    width: 15,
    height: 20,
    marginRight: 10
  },
  ratingIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  price: {
    marginLeft: 10,
    fontWeight: '600',
    color: Color.blue,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title1
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.secondaryNotActive
  }
});
