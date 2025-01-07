import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles.js';
import { Icon } from './ui/icon/index';
import { Home } from 'lucide-react-native';

/**
 * @param {object} props
 */
export default function Facilities({}) {
  return (
    <View>
      <Text style={styles.facilities}>Facilities</Text>

      <View style={styles.frame4}>
        <View style={styles.frame5}>
          <View style={styles.date}>
            <View style={styles.background}>
              <Icon size="lg" as={Home}></Icon>
            </View>
            <View style={styles.background}>
              <Icon size="lg" as={Home}></Icon>
            </View>
            <View style={styles.background}>
              <Icon size="lg" as={Home}></Icon>
            </View>
            <View style={styles.background}>
              <Icon size="lg" as={Home}></Icon>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  facilities: {
    top: 350,
    left: 33,
    width: 398,
    height: 25,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden',
    color: Color.darkGray,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.poppinsMedium
  },
  date: {
    width: 340,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  frame5: {
    gap: 30,
    flexDirection: 'row',
    height: 54,
    overflow: 'hidden',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frame4: {
    top: 380,
    left: 31,
    width: 400,
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden'
  },
  background: {
    borderRadius: Border.br_7xs,
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 62,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
