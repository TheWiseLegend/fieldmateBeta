/** @import { FullField } from '../types.js' */
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { Padding, Color, FontFamily, FontSize, Gap } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {FullField} props.field
 */
export default function StadiumViewInfo({ field }) {
  function handleContactUs() {
    if (!field.vendor.phone) return;

    const url = `https://wa.me/+6${field.vendor.phone}`;
    Linking.openURL(url).catch((err) => console.error('Error opening WhatsApp chat:', err));
  }

  function handleMaps() {
    // const url = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${field.maps}`;
    const url = `https://maps.app.goo.gl/${field.maps_id}`;
    Linking.openURL(url).catch((err) => console.error('Error opening Google Maps:', err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.frameChild}>
          <Text style={styles.openingTimes}>Opening Times:</Text>
          <Text style={styles.text}>00:00 AM - 00:00 AM</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleContactUs}>
          <Text style={styles.btnText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.frame}>
        <Text style={[styles.text, styles.location]}>Location: {field.address}</Text>

        <TouchableOpacity style={styles.btn} onPress={handleMaps}>
          <Text style={styles.btnText}>Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '2%',
    width: '100%',
    gap: Gap.gap_lg,
    alignItems: 'center'
  },
  frame: {
    width: '100%',
    height: 86,
    gap: Gap.gap_sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7777772E'
  },
  frameChild: {
    left: '5%',
    justifyContent: 'center',
    gap: Gap.gap_sm
  },
  btn: {
    top: '20%',
    bottom: '20%',
    right: '2%',
    width: 'auto',
    height: '50%',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: Padding.p_8xs,
    backgroundColor: Color.colorMediumslateblue
  },
  location: {
    top: '10%',
    bottom: '10%',
    left: '5%',
    height: 'auto'
  },
  openingTimes: {
    alignSelf: 'stretch',
    fontWeight: '500',
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  text: {
    alignSelf: 'stretch',
    fontFamily: FontFamily.secondaryNotActive,
    fontSize: FontSize.secondaryNotActive_size
  },
  btnText: {
    fontWeight: '700',
    alignSelf: 'stretch',
    color: Color.surface,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.openSansBold
  }
});