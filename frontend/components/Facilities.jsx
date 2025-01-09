/** @import { FullField } from '../types.js' */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from './ui/icon/index';
import { ShowerHead, GlassWater, Shirt, Coffee, WifiHigh } from 'lucide-react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {FullField} props.field
 */
export default function Facilities({ field }) {
  return (
    <View style={styles.container}>
      {field.facilities.length > 0 ? (
        <>
          <Text style={styles.title}>Facilities</Text>

          <View style={styles.grid}>
            {field.facilities.map((name, i) => (
              <View style={styles.background} key={i}>
                <Icon
                  size="lg"
                  as={
                    name === 'Cafe'
                      ? Coffee
                      : name === 'WiFi'
                        ? WifiHigh
                        : name === 'Water'
                          ? GlassWater
                          : name === 'Shower'
                            ? ShowerHead
                            : name === 'Shirts'
                              ? Shirt
                              : null
                  }
                ></Icon>
              </View>
            ))}
          </View>
        </>
      ) : (
        <Text style={styles.title}>NO Facilities</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 'auto'
  },
  title: {
    left: '5%',
    fontWeight: '500',
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  grid: {
    top: '10%',
    left: '10%',
    width: '80%',
    height: 55,
    gap: 5,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  background: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorLightgray
  }
});
