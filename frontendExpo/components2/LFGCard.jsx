import React, { useMemo } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles';

/**
 * @param {string} key
 * @param {string | number | undefined} value
 */
function getStyleValue(key, value) {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
}

/**
 * @param {object} props
 * @param {number} [props.groupViewTop]
 * @param {number} [props.groupViewLeft]
 */
export default function LFGCard({ groupViewTop, groupViewLeft }) {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue('top', groupViewTop),
      ...getStyleValue('left', groupViewLeft)
    };
  }, [groupViewTop, groupViewLeft]);

  return (
    <View style={[styles.vectorParent, groupViewStyle]}>
      <Image
        style={[styles.instanceChild, styles.instanceLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/rectangle-51.png')}
      />

      <Image
        style={[styles.profileLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/profile.png')}
      />
      <Text style={styles.title}>Name </Text>

      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/calender.png')}
      />
      <Text style={[styles.aug4, styles.aug4Typo]}>20 Aug - 4 Sep</Text>

      <Image
        style={[styles.vectorIcon, styles.instanceLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/location.png')}
      />
      <Text style={[styles.location, styles.aug4Typo]}>Location</Text>

      <Image
        style={[styles.instanceItem, styles.instanceLayout]}
        contentFit="cover" // @ts-expect-error
        source={require('../assets/person.png')}
      />
      <Text style={[styles.playersPx, styles.aug4Typo]}>Players px</Text>

      <Text style={styles.rm}>30.00 RM</Text>

      <View style={styles.joinUsWrapper}>
        <Text style={styles.joinUs}>Join us</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileLayout: {
    top: 446,
    left: 21,
    height: 43,
    width: 41,
    position: 'absolute'
  },
  iconLayout1: {
    maxHeight: '100%',
    position: 'absolute'
  },
  instanceLayout: {
    maxHeight: '100%',
    overflow: 'hidden',
    maxWidth: '100%',
    position: 'absolute'
  },
  aug4Typo: {
    color: Color.grayIcon,
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.secondaryNotActive_size,
    textAlign: 'left',
    position: 'absolute'
  },
  instanceChild: {
    height: '100%',
    width: '114.49%',
    top: '0%',
    right: '-14.49%',
    left: '0%',
    borderRadius: Border.br_8xs,
    bottom: '0%'
  },
  rm: {
    height: '16.75%',
    width: '33.33%',
    top: '8.99%',
    left: '71.89%',
    fontSize: FontSize.title1_size,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.blue,
    textAlign: 'left',
    position: 'absolute'
  },
  aug4: {
    height: '29.59%',
    width: '35.59%',
    top: '30.77%',
    left: '27.4%',
    color: Color.grayIcon
  },
  playersPx: {
    height: '14.79%',
    width: '25.99%',
    top: '51.48%',
    left: '74.01%'
  },
  vectorIcon: {
    height: '11.83%',
    width: '3.95%',
    top: '54.44%',
    right: '74.01%',
    bottom: '33.73%',
    left: '22.03%',
    borderRadius: Border.br_10xs
  },
  instanceItem: {
    height: '12.43%',
    width: '5.48%',
    top: '50.89%',
    right: '28.98%',
    bottom: '36.69%',
    left: '65.54%'
  },
  title: {
    top: '55.62%',
    left: '2.26%',
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    fontSize: FontSize.secondaryNotActive_size,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    position: 'absolute'
  },
  joinUs: {
    fontSize: FontSize.buttonText_size,
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    color: Color.surface,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0
  },
  joinUsWrapper: {
    height: '31.36%',
    width: '31.36%',
    top: '68.64%',
    right: '-15.82%',
    left: '84.46%',
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorMediumslateblue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Padding.p_8xs,
    bottom: '0%',
    position: 'absolute'
  },
  location: {
    height: '15.38%',
    width: '21.19%',
    top: '52.66%',
    left: '27.4%',
    color: Color.grayIcon
  },
  vectorParent: {
    top: 782,
    left: 11,
    width: 354,
    height: 169,
    position: 'absolute'
  }
});
