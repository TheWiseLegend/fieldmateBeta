import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {number} props.rating
 */
export default function Reviews({ rating }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.groupIcon}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/group.png')}
      />
      <Text style={styles.text}>{rating}/5</Text>

      {/* <Text style={styles.seeAllReviews}>See all reviews</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '3%',
    left: '45%',
    width: '50%',
    height: 27,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    marginLeft: 5,
    width: '35%',
    left: '8%',
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.secondaryNotActive
  },
  groupIcon: {
    left: '0%',
    width: '20',
    height: '20',
    right: '93%',
    bottom: '7%',
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
  // seeAllReviews: {
  //   marginLeft: 5,
  //   left: '60%',
  //   width: '50%',
  //   fontWeight: '700',
  //   color: Color.colorRoyalblue_100,
  //   fontSize: FontSize.secondaryNotActive_size,
  //   fontFamily: FontFamily.openSansBold
  // }
});
