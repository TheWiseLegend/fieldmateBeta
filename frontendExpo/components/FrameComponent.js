import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap
} from '../GlobalStyles.js';

export default function FrameComponent() {
  return (
    <View style={styles.frameParent}>
      <LinearGradient
        style={styles.frame}
        locations={[1]}
        colors={['rgba(119, 119, 119, 0.18)']}
      >
        <View style={[styles.contactUsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.contactUs}>Contact Us</Text>
        </View>
        <View style={styles.frame1}>
          <Text style={styles.openingTimes}>{`Opening Times:
`}</Text>
          <Text
            style={[styles.pm1100Pm, styles.pm1100PmTypo]}
          >{`04:00 PM -11:00 PM
`}</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.frame2}
        locations={[1]}
        colors={['rgba(119, 119, 119, 0.18)']}
      >
        <Text
          style={[styles.staduimLocationCyberjaya, styles.pm1100PmTypo]}
        >{`Staduim location:
Cyberjaya`}</Text>
        <View style={[styles.directionsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.contactUs}>Directions</Text>
        </View>
      </LinearGradient>
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
    fontSize: FontSize.buttonText_size
  },
  contactUsWrapper: {
    height: '37.21%',
    width: '30.47%',
    top: '29.07%',
    right: '3.72%',
    bottom: '33.72%',
    left: '65.81%',
    position: 'absolute',
    padding: Padding.p_8xs,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_36xl
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
  frame: {
    backgroundColor: 'transparent',
    height: 86,
    borderRadius: Border.br_xl,
    overflow: 'hidden',
    alignSelf: 'stretch'
  },
  staduimLocationCyberjaya: {
    height: 50,
    width: 172
  },
  directionsWrapper: {
    width: 127
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
    alignSelf: 'stretch'
  },
  frameParent: {
    top: 546,
    left: 1,
    width: 430,
    gap: Gap.gap_lg,
    alignItems: 'center',
    position: 'absolute'
  }
});
