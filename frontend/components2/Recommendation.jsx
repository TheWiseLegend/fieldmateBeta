import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles.js';

/**
 * @param {object} props
 */
export default function Recommendation({}) {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/bg0.png')} style={styles.container}>
      <Text style={styles.subtitle3}>What are you looking for?</Text>
      <View style={styles.gridImage}>
        <TouchableOpacity style={styles.stadiumImage} onPress={() => navigation.navigate('Stadiums')}>
          <ImageBackground
            imageStyle={styles.roundedImage}
            style={styles.stadiumImage}
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
            style={styles.stadiumImage}
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
    height: 215,
    width: 430,
    marginTop: 165,
    padding: 20
  },
  textTitle: {
    fontSize: 16,
    lineHeight: 25,
    fontFamily: FontFamily.robotoMedium,
    color: Color.surface,
    textAlign: 'center',
    letterSpacing: 0
  },
  subtitle3: {
    fontSize: FontSize.size_lg_6,
    lineHeight: 25,
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
    color: Color.onSurfaceMediumEmphasis,
    textAlign: 'left',
    letterSpacing: 0
  },
  stadiumImage: {
    height: 110,
    width: 175,
    position: 'relative' // Ensure the textBackground is positioned relative to this
  },
  gridImage: {
    width: '96%',
    marginTop: 30,
    flexDirection: 'row', // Arrange children in a row
    gap: 12 // Distribute space evenly between the items
  },
  roundedImage: {
    borderRadius: 12 // Adjust the value to make the image more or less rounded
  },
  textBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, // Position at the bottom of the ImageBackground
    borderRadius: 10 // Adjust the value to make the image more or less rounded
  }
});
