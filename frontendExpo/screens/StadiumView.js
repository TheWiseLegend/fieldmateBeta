import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FrameComponent from '../components/FrameComponent.js';
import FrameComponent1 from '../components/FrameComponent1.js';
import Header from '../components2/Header.jsx';
import Facilities from '../components2/Facilities.jsx';
import Reviews from '../components2/Reviews.jsx';
import { FontFamily, Color, Border } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {string} [props.name='Stadium Name']
 */
export default function StadiumView({ name = 'Stadium Name' }) {
  return (
    <View id="stadium-view-screen" style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          contentFit="cover" // @ts-expect-error
          source={require('../assets/image-5.png')}
          style={styles.StadiumView}
        />
      </View>
      <Text style={styles.stadiumName}>{name}</Text>

      <Reviews />

      <Facilities />

      <FrameComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  StadiumView: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 244,
    width: '100%'
  },
  container: {
    marginTop: 30
  },
  stadiumName: {
    fontSize: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansBold,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 30,
    height: '100%',
    marginTop: 10,
    marginLeft: 15
  }
});

// const styles = StyleSheet.create({
//   StadiumBanner: {
//     borderBottomRightRadius: Border.br_10xs,
//     borderBottomLeftRadius: Border.br_10xs,
//     top: 0,
//     left: 0,
//     height: 244,
//     width: '100%',
//     maxWidth: '100%',
//     alignSelf: 'stretch',
//     overflow: 'hidden',
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   stadiumName: {
//     fontSize: 30,
//     width: 220,
//     height: 37,
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     fontFamily: FontFamily.openSansBold,
//     fontWeight: '700',
//     textAlign: 'left',
//     lineHeight: 22
//   },
//   nameFrame: {
//     top: 280,
//     left: 21,
//     width: 410,
//     justifyContent: 'center',
//     position: 'absolute',
//     overflow: 'hidden'
//   },
//   stadiumView: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'center'
//   }
// });
