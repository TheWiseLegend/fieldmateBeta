import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize, Color, Border } from '../GlobalStyles';

//BookCard
const Frame5 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <Image
        style={[styles.frameChild, styles.frameChildPosition]}
        contentFit="cover"
        source={require('../assets/ellipse-10.png')}
      />
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require('../assets/frame4.png')}
      />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={styles.bookASlot}>Book A Slot</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.date}>
          <Text style={[styles.date1, styles.date1Typo]}>Date</Text>
          <View style={[styles.date2, styles.date2Layout]}>
            <View style={[styles.background, styles.date2Layout]} />
            <Text style={[styles.monday09December, styles.date1Typo]}>
              Monday, 09 December 2024
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: 'hidden',
    position: 'absolute'
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

export default Frame5;
