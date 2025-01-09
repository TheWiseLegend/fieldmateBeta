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
      <Text style={styles.subtitle}>What are you looking for?</Text>

      <View style={styles.gridImage}>
        {['Stadiums', 'Matches'].map((name, i) => {
          return (
            // @ts-expect-error
            <TouchableOpacity key={i} style={styles.stadiumImage} onPress={() => navigation.navigate(name)}>
              <ImageBackground
                imageStyle={styles.roundedImage}
                style={styles.stadiumImage} // @ts-expect-error
                source={require('../assets/stadium-2.png')}
              >
                <View style={styles.textBackground}>
                  <Text style={styles.textTitle}>{name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '120%',
    height: 215,
    padding: 20
  },
  backgroundImage: {
    // resizeMode: 'cover'
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.surface,
    fontFamily: FontFamily.robotoMedium
  },
  subtitle: {
    fontWeight: '500',
    color: Color.onSurfaceMediumEmphasis,
    fontSize: FontSize.size_lg_6,
    fontFamily: FontFamily.robotoMedium
  },
  stadiumImage: {
    width: 175,
    height: 110,
    position: 'relative'
  },
  gridImage: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    gap: 12
  },
  roundedImage: {
    borderRadius: 12
  },
  textBackground: {
    borderRadius: 10,
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
});
