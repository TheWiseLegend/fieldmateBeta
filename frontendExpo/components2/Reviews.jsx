import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function Reviews({}) {
  return (
    <View style={styles.frame2}>
      <View style={styles.frameWrapper}>
        <View style={[styles.frame3, styles.frame3FlexBox]}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/group.png')}
          />
          <Text style={[styles.text, styles.textLayout]}>4.2/5 (33)</Text>

          <Text style={[styles.seeAllReviews, styles.textLayout]}>
            See all reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame3FlexBox: {
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  text: {
    width: '34.84%',
    top: '3.7%',
    left: '7.74%',
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.secondaryNotActive,
    color: Color.colorBlack
  },
  frame3: {
    height: 27,
    overflow: 'hidden'
  },
  frameWrapper: {
    width: 310,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frame2: {
    top: 300,
    left: 20,
    width: 411,
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupIcon: {
    height: '92.59%',
    width: '7.16%',
    top: '0%',
    right: '92.84%',
    bottom: '7.41%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  groupIconLayout: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  seeAllReviews: {
    width: '49.35%',
    top: '11.11%',
    left: '60.65%',
    fontSize: FontSize.secondaryNotActive_size,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: '700'
  },
  textLayout: {
    position: 'absolute',
    textAlign: 'left',
    lineHeight: 27,
    letterSpacing: 0,
    marginLeft: 5
  }
});
