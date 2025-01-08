/** @import { FullField, MyNavigationProp } from '../types.js' */
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '../GlobalStyles.js';
import { storeData } from '../storage';

/**
 * @param {object} props
 * @param {FullField} props.field
 */
export default function StadiumCard({ field }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  // store the props into a variable
  const newField = field;


  async function handleNavigation() {
    try {
      await storeData('field_view', JSON.stringify(field));
      
      navigation.navigate('Stadium View');
    } catch (error) {
      console.error('Error storing data or navigating:', field);
    }
  }

  return (
    <View style={styles.stadiumCard}>
      <Image
        style={styles.banner}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/field.png')}
      />

      <View style={styles.viewButton}>
        <Button title="View" onPress={handleNavigation} />
      </View>

      <View style={styles.inner}>
        <Text style={styles.name}>{field.field_name || 'NAME'}</Text>

        <View style={styles.row}>
          <Image
            style={styles.locationIcon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/location.png')}
          />
          <Text style={styles.text}>{field.address || 'ADDRESS'}</Text>
        </View>

        <View style={styles.row}>
          <Image
            style={styles.ratingIcon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/star-rate.png')}
          />
          <Text style={styles.text}>{field.rating || 0}/5</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.price}>{field.price || 0} RM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stadiumCard: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  viewButton: {
    top: -10,
    width: '100%',
    position: 'absolute',
  },
  banner: {
    width: '100%',
    height: 150,
  },
  inner: {
    padding: 10,
  },
  name: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: FontSize.secondaryNotActive_size,
    fontFamily: FontFamily.secondaryNotActive,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    left: 3,
    width: 15,
    height: 20,
    marginRight: 10,
  },
  ratingIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    marginLeft: 10,
    fontWeight: '600',
    color: Color.blue,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title1,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.secondaryNotActive,
  },
});
