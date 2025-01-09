/** @import { FullField, MyNavigationProp } from '../types.js' */
import React, { useContext } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize, Border, Padding } from '../GlobalStyles.js';
import { DBContext } from '../db.js';

/**
 * @param {object} props
 * @param {FullField} props.field
 */
export default function StadiumCard({ field }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const db = useContext(DBContext);

  function handleNavigation() {
    db.update('field', field);
    navigation.navigate('Stadium View');
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleNavigation}>
      {/* @ts-expect-error */}
      <Image style={styles.banner} contentFit="cover" source={require('../assets/field.png')} />

      <View style={styles.details}>
        <Text style={styles.name}>{field.field_name || 'Stadium Name'}</Text>

        <View style={styles.infoRow}>
          {/* @ts-expect-error */}
          <Image style={styles.icon} contentFit="cover" source={require('../assets/location.png')} />
          <Text style={styles.infoText}>{field.address || 'No address available'}</Text>
        </View>

        <View style={styles.infoRow}>
          {/* @ts-expect-error */}
          <Image style={styles.icon} contentFit="cover" source={require('../assets/star-rate.png')} />
          <Text style={styles.infoText}>⭐ {field.rating || '0.0'}/5</Text>
        </View>

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
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D1C4E9',
    backgroundColor: '#fff',
    borderRadius: Border.br_md
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
    color: '#673AB7',
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
    color: '#666'
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#D1C4E9',
    paddingTop: 10
  },
  priceLabel: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.secondary,
    color: '#666'
  },
  price: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title1,
    fontWeight: 'bold',
    color: '#673AB7'
  }
});
