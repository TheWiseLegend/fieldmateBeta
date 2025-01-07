import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Frame6 from '../components/Frame6.jsx';
import Frame5 from '../components/Frame5.jsx';
import Frame from '../components/Frame.jsx';
import Frame1 from '../components/Frame1.jsx';
import Header from '../components/Header.jsx';
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles.js';

export default function BookingSection() {
  return (
    <View id="booking-screen" className="screen" style={styles.container}>
      <Header />

      <ScrollView style={[styles.bookASlotWrapper, styles.primaryButtonFlexBox]}>
        <View style={styles.bookASlot}>
          <Text style={[styles.bookingTime, styles.doYouWantTypo]}>Booking Time</Text>

          <Text style={[styles.doYouWant, styles.doYouWantTypo]}>
            Do you want to create a match post? (Look for more players)
          </Text>

          <View style={styles.sync}>
            <Text style={[styles.createAMatch, styles.doYouWantTypo]}>Create a Match</Text>

            <Image
              style={styles.toggleIcon}
              contentFit="cover" // @ts-expect-error
              source={require('../assets/toggle.png')}
            />
          </View>

          <View style={[styles.primaryButton, styles.primaryButtonFlexBox]}>
            <Text style={styles.proceedToPayment}>Proceed to payment</Text>
          </View>

          <Frame6 />

          <Frame pM="12:00 PM" pM1="1:00 PM" pM2="2:00 PM" />

          <Frame1 pM="3:00 PM" pM1="4:00 PM" pM2="5:00 PM" />

          <Frame1 frameTop={542} frameLeft={52} pM="6:00 PM" pM1="7:00 PM" pM2="8:00 PM" />

          <Frame
            pM="9:00 PM"
            pM1="10:00 PM"
            pM2="11:00 PM"
            frameTop={609}
            pMColor="#bababa"
            backgroundBorderColor="#d7d7d7"
          />

          <Frame5 />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  primaryButtonFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  doYouWantTypo: {
    textAlign: 'left',
    fontSize: FontSize.buttonText_size,
    position: 'absolute'
  },
  bookingTime: {
    top: 367,
    width: 169,
    height: 25,
    color: Color.darkGray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    left: 20,
    textAlign: 'left'
  },
  doYouWant: {
    top: 687,
    width: 329,
    height: 31,
    color: Color.darkGray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    left: 20,
    textAlign: 'left'
  },
  createAMatch: {
    top: 0,
    left: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightslategray
  },
  toggleIcon: {
    height: '87.5%',
    width: '10.92%',
    top: '8.33%',
    right: '0%',
    bottom: '4.17%',
    left: '89.08%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  sync: {
    top: 755,
    left: 17,
    width: 293,
    height: 24,
    position: 'absolute'
  },
  proceedToPayment: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.surface,
    textAlign: 'center',
    fontSize: FontSize.buttonText_size
  },
  primaryButton: {
    top: 832,
    right: 65,
    left: 47,
    borderRadius: Border.br_33xl,
    backgroundColor: Color.colorDarkslategray,
    height: 60,
    position: 'absolute'
  },
  bookASlot: {
    backgroundColor: Color.surface,
    height: 932,
    overflow: 'hidden',
    alignSelf: 'stretch'
  },

  bookASlotWrapper: {
    alignSelf: 'stretch'
  }
});
