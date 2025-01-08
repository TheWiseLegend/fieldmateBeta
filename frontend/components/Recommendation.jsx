/** @import { MyNavigationProp } from '../types.js' */
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function Recommendation({}) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  return (
    // @ts-expect-error
    <ImageBackground source={require('../assets/bg0.png')} style={styles.container} imageStyle={styles.backgroundImage}>
      <Text style={styles.subtitle3}>What are you looking for?</Text>
      <View style={styles.gridImage}>
        <TouchableOpacity style={styles.stadiumImage} onPress={() => navigation.navigate('Stadiums')}>
          <ImageBackground
            imageStyle={styles.roundedImage}
            style={styles.stadiumImage} // @ts-expect-error
            source={require('../assets/stadium-2.png')}
          >
            <View style={styles.textBackground}>
              <Text style={styles.textTitle}>Stadiums</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.stadiumImage} onPress={() => navigation.navigate('Matches')}>
          <ImageBackground
            imageStyle={styles.roundedImage}
            style={styles.stadiumImage} // @ts-expect-error
            source={require('../assets/stadium-2.png')}
          >
            <View style={styles.textBackground}>
              <Text style={styles.textTitle}>Matches</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '120%',
    height: 215,
    padding: 20,
  },
  backgroundImage: {
    resizeMode: 'cover'
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.surface,
    fontFamily: FontFamily.robotoMedium
  },
  subtitle3: {
    fontWeight: '500',
    color: Color.onSurfaceMediumEmphasis,
    fontSize: FontSize.size_lg_6,
    fontFamily: FontFamily.robotoMedium
  },
  stadiumImage: {
    width: 175,
    height: 110,
    position: 'relative' // Ensure the textBackground is positioned relative to this
  },
  gridImage: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row', // Arrange children in a row
    gap: 12 // Distribute space evenly between the items
  },
  roundedImage: {
    borderRadius: 12
  },
  textBackground: {
    borderRadius: 10, // Adjust the value to make the image more or less rounded
    bottom: 0, // Position at the bottom of the ImageBackground
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
});
