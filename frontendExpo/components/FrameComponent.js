import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Padding, Color, Border, FontFamily, FontSize, Gap } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function FrameComponent({}) {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.marginTop}></View>
          <Text style={styles.openingTimes}>Opening Times:</Text>

          <Text style={[styles.pm1100Pm, styles.pm1100PmTypo]}>04:00 PM -11:00 PM</Text>
        </View>

        <TouchableOpacity
          style={[styles.contactUsWrapper, styles.wrapperFlexBox, styles.contactUsBtn]}
          onPress={() => alert('Contact Us')}
        >
          <Text style={styles.contactUs}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.frame2}>
        <Text style={[styles.staduimLocationCyberjaya, styles.pm1100PmTypo]}>Staduim location: Cyberjaya</Text>

        <TouchableOpacity
          style={[styles.directionsWrapper, styles.wrapperFlexBox, styles.directionBtn]}
          onPress={() => alert('Directions')}
        >
          <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_8xs,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_36xl,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  directionBtn: {
    borderRadius: 30
  },
  contactUsBtn: {
    borderRadius: 30,
    paddingVertical: 10, // Add vertical padding for better appearance
    paddingHorizontal: 20 // Add horizontal padding for better appearance
  },
  pm1100PmTypo: {
    color: Color.grayIcon,
    fontFamily: FontFamily.secondaryNotActive,
    fontSize: FontSize.secondaryNotActive_size,
    textAlign: 'left',
    lineHeight: 22,
    letterSpacing: 0
  },
  contactUs: {
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    color: Color.surface,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.buttonText_size,
    marginLeft: 20
  },
  contactUsWrapper: {
    height: '50.21%',
    top: '29.07%',
    bottom: '33.72%',
    left: '57.81%',
    position: 'absolute',
    padding: Padding.p_8xs,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_36xl,
    width: 150,
    borderRadius: 30, // Make the button rounded
    paddingVertical: 10, // Add vertical padding for better appearance
    paddingHorizontal: 20 // Add horizontal padding for better appearance
  },
  openingTimes: {
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkGray,
    textAlign: 'left',
    lineHeight: 22,
    fontSize: FontSize.buttonText_size,
    alignSelf: 'stretch'
  },
  pm1100Pm: {
    alignSelf: 'stretch',
    color: Color.grayIcon,
    fontFamily: FontFamily.secondaryNotActive,
    fontSize: FontSize.secondaryNotActive_size
  },
  frame1: {
    top: 9,
    left: 29,
    justifyContent: 'flex-end',
    gap: Gap.gap_sm,
    width: 172,
    overflow: 'hidden',
    position: 'absolute'
  },
  marginTop: {
    marginTop: 8
  },
  frame: {
    backgroundColor: 'transparent',
    height: 86,
    borderRadius: Border.br_xl,
    overflow: 'hidden',
    alignSelf: 'stretch',
    backgroundColor: '#7777772E',
    marginLeft: 10,
    width: '100%'
  },
  staduimLocationCyberjaya: {
    height: 50,
    width: 172
  },
  directionsWrapper: {
    width: 150,
    borderRadius: 30, // Make the button rounded
    paddingVertical: 10, // Add vertical padding for better appearance
    paddingHorizontal: 20 // Add horizontal padding for better appearance
  },
  frame2: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_2xl,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    height: 86,
    borderRadius: Border.br_xl,
    alignSelf: 'stretch',
    backgroundColor: '#7777772E',
    marginLeft: 10,
    paddingRight: 10,
    width: '100%'
  },
  frameParent: {
    top: 466,
    left: 1,
    width: '95%',
    gap: Gap.gap_lg,
    alignItems: 'center',
    position: 'absolute'
  },
  buttonText: {
    color: Color.surface,
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    textAlign: 'center',
    marginLeft: 20,
    fontSize: FontSize.buttonText_size
  }
});
