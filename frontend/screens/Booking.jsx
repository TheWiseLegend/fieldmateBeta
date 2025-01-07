import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Duration from '../components/BookingDuration.jsx';
import BookingDate from '../components/BookingDate.jsx';
import BookingTime from '../components/BookingTime.jsx';
import BookingTime2 from '../components/BookingTime2.jsx';
import Header from '../components/Header.jsx';
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles.js';

export default function BookingSection() {
  return (
    <View id="booking-screen" className="screen">
      <Header />

      {/* <ScrollView> */}
      <View style={styles.container}>
        <Image
          style={styles.frameChild}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/circle.png')}
        />
        <Image
          style={styles.frameIcon}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/arrow-left.png')}
        />

        <View style={styles.titleParent}>
          <Text style={styles.title}>Book A Slot</Text>
        </View>

        <BookingDate />

        {/* <Duration />

        <Text style={styles.bookingTime}>Booking Time</Text>
        <BookingTime pM="12:00 PM" pM1="1:00 PM" pM2="2:00 PM" />
        <BookingTime2 pM="3:00 PM" pM1="4:00 PM" pM2="5:00 PM" />
        <BookingTime2 frameTop={542} frameLeft={52} pM="6:00 PM" pM1="7:00 PM" pM2="8:00 PM" />
        <BookingTime
          pM="9:00 PM"
          pM1="10:00 PM"
          pM2="11:00 PM"
          frameTop={609}
          pMColor="#bababa"
          backgroundBorderColor="#d7d7d7"
        />

        <Text style={styles.doYouWant}>Are you looking for more players?</Text>

        <View style={styles.sync}>
          <Text style={styles.createAMatch}>Create a Match</Text>

          <Image
            style={styles.toggleIcon}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/toggle.png')}
          />
        </View>

        <View style={styles.primaryButton}>
          <Text style={styles.proceedToPayment}>Proceed to payment</Text>
        </View> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleParent: {
    left: 110,
    width: 198,

    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    position: 'absolute'
  },
  title: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22
  },

  frameChild: {
    top: 0,
    left: 0,
    width: 35,
    height: 35,
    position: 'absolute'
  },
  frameIcon: {
    top: 0,
    left: 6,
    width: 24,
    height: 25,
    position: 'absolute'
  },

  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  bookingTime: {
    top: 367,
    left: 20,
    width: 169,
    height: 25,
    position: 'absolute',
    fontWeight: '500',
    color: Color.darkGray,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  doYouWant: {
    top: 687,
    left: 20,
    width: 329,
    height: 31,
    position: 'absolute',
    fontWeight: '500',
    color: Color.darkGray,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  createAMatch: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: Color.colorLightslategray,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsRegular
  },
  toggleIcon: {
    top: '8.33%',
    right: '0%',
    bottom: '4.17%',
    left: '89.08%',
    width: '10.92%',
    height: '87.5%',
    position: 'absolute'
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
    color: Color.surface,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.title1
  },
  primaryButton: {
    height: 60,
    top: 832,
    right: 65,
    left: 47,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: Border.br_33xl,
    backgroundColor: Color.colorDarkslategray
  }
});
