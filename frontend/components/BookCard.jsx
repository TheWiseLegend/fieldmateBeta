import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { FontFamily, FontSize, Color, Border } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function BookCard({}) {
  return (
    <>
      <View style={[styles.frame, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/circle.png')}
        />

        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/arrow-left.png')}
        />

        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={styles.bookASlot}>Book A Slot</Text>
        </View>

        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.date}>
            <Text style={[styles.date1, styles.date1Typo]}>Date</Text>

            <View style={[styles.date2, styles.date2Layout]}>
              <View style={[styles.background, styles.date2Layout]} />

              <Text style={[styles.monday09December, styles.date1Typo]}>Monday, 09 December 2024</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Frame 6 */}

      <View style={styless.frame}>
        <View style={styless.date}>
          <Text style={styless.duration}>Duration</Text>

          <View style={[styless.date1, styless.dateLayout]}>
            <Image
              style={styless.backgroundLayout}
              contentFit="cover" // @ts-expect-error
              source={require('../assets/background.png')}
            />

            <Text style={[styless.min, styless.minTypo]}>60 min</Text>
          </View>
        </View>

        <View style={[styless.date2, styless.dateLayout]}>
          <View style={[styless.background, styless.backgroundLayout]} />

          <Text style={[styless.min1, styless.minTypo]}>120 min</Text>
        </View>
      </View>

      {/* Bookingsection Booking time */}

      <View style={styles.bookingSection}>
        <View style={[styles.bookASlotWrapper, styles.primaryButtonFlexBox]}>
          <View style={styles.bookASlot}>
            <Text style={[styles.bookingTime, styles.doYouWantTypo]}>Booking Time</Text>
          </View>
        </View>
      </View>
    </>
  );
}

//Frame 5
const styles = StyleSheet.create({
  framePosition: {
    overflow: 'hidden',
    position: 'absolute'
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
  bookingSection: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
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
  bookASlotWrapper: {
    alignSelf: 'stretch'
  },
  frameChildPosition: {
    left: 0,
    top: 0
  },
  frameFlexBox: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    overflow: 'hidden',
    position: 'absolute'
  },
  date1Typo: {
    height: 23,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute'
  },
  date2Layout: {
    height: 58,
    width: 361,
    position: 'absolute'
  },
  frameChild: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 0
  },
  frameIcon: {
    left: 6,
    width: 24,
    height: 25,
    top: 0
  },
  bookASlot: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22
  },
  frame1: {
    left: 110,
    width: 198
  },
  date1: {
    left: 26,
    fontSize: FontSize.buttonText_size,
    color: Color.darkGray,
    width: 58,
    top: 0
  },
  background: {
    borderRadius: Border.br_7xs,
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0
  },
  monday09December: {
    top: 17,
    left: 15,
    fontSize: FontSize.size_sm,
    color: Color.colorSilver_200,
    width: 219
  },
  date2: {
    top: 35,
    left: 8
  },
  date: {
    height: 93,
    width: 369
  },
  frame2: {
    width: 369,
    height: 145,
    left: 13
  },
  frame: {
    top: 61,
    width: 382,
    height: 145,
    left: 13
  }
});

// Frame 6
const styless = StyleSheet.create({
  dateLayout: {
    height: 55,
    width: 132,
    top: 33,
    position: 'absolute'
  },
  minTypo: {
    width: 62,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_sm,
    left: '50%',
    top: 16,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute'
  },
  backgroundLayout: {
    borderRadius: Border.br_7xs,
    height: 55,
    width: 132,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  duration: {
    fontSize: FontSize.buttonText_size,
    color: Color.darkGray,
    width: 96,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    top: 0,
    left: 20,
    position: 'absolute'
  },
  min: {
    marginLeft: -32.4
  },
  date1: {
    left: 33
  },
  date: {
    width: 165,
    left: 0,
    top: 0,
    height: 88,
    position: 'absolute'
  },
  background: {
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1
  },
  min1: {
    marginLeft: -31.4
  },
  date2: {
    left: 226
  },
  frame: {
    top: 226,
    width: 358,
    overflow: 'hidden',
    height: 88,
    left: 20,
    position: 'absolute'
  }
});
