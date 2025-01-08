/** @import { FullField, MyNavigationProp } from '../types.js' */
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles.js';
import { storeData } from '../storage.js'

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
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleNavigation()}>
      {/* Banner Image */}
      <Image
        style={styles.banner}
        contentFit="cover"
        source={require(// @ts-ignore
        '../assets/field.png')}
      />

      {/* Card Details */}
      <View style={styles.details}>
        {/* Stadium Name */}
        <Text style={styles.name}>{field.field_name || 'Stadium Name'}</Text>

        {/* Location */}
        <View style={styles.infoRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require(// @ts-ignore
            '../assets/location.png')}
          />
          <Text style={styles.infoText}>{field.address || 'No address available'}</Text>
        </View>

        {/* Rating */}
        <View style={styles.infoRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require(// @ts-ignore
            '../assets/star-rate.png')}
          />
          <Text style={styles.infoText}>⭐ {field.rating || '0.0'}/5</Text>
        </View>

        {/* Price */}
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Starting from</Text>
          <Text style={styles.price}>{field.price || '0.00'} RM</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: Border.br_md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: Padding.p_md,
    borderWidth: 1,
    borderColor: '#D1C4E9', // Light mauve border color
    marginHorizontal: 5 // Add horizontal margin to add space between cards
  },
  banner: {
    width: '100%',
    height: 180
  },
  details: {
    padding: Padding.p_md
  },
  name: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.title1,
    fontWeight: 'bold',
    color: '#673AB7', // Purple color for the stadium name
    marginBottom: 10
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  infoText: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.secondary,
    color: '#666' // Grey color for the info text
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#D1C4E9', // Light mauve border color
    paddingTop: 10
  },
  priceLabel: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.secondary,
    color: '#666' // Grey color for the price label
  },
  price: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title1,
    fontWeight: 'bold',
    color: '#673AB7' // Purple color for the price
  }
});
