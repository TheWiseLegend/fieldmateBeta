import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles.js';

/**
 * @param {object} props
 * @param {object} props.data
 */
export default function StadiumCard({ data }) {
  return (
    <View style={styles.frame}>
      <View style={styles.image5Parent}>
        <Image
          style={[styles.image5Icon, styles.image5IconPosition]}
          contentFit="cover" // @ts-expect-error
          source={require('../assets/image-5.png')}
        />

        <View style={[styles.titleParent, styles.image5IconPosition]}>
          <View style={[styles.frame5, styles.frameFlexBox]}>
            <Text style={[styles.stadiumName, styles.titleTypo]}>{data.field_name || 'NAME'}</Text>
          </View>

          <Image
            style={[styles.frameIcon, styles.frameIconPosition]}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/frame.png')}
          />
          <View style={[styles.frame2, styles.framePosition]}>
            <Text style={[styles.location, styles.textTypo]}>{data.address}</Text>
          </View>

          <View style={[styles.frame4, styles.framePosition]}>
            <Text style={[styles.text, styles.textTypo]}>4.2/5</Text>
          </View>

          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Text style={[styles.startingFrom, styles.textTypo]}>Price</Text>
          </View>
          <View style={styles.frame1}>
            <Text style={styles.rm}>{data.price} RM</Text>
          </View>

          <Image
            style={[styles.frameIcon1, styles.frameIconPosition]}
            contentFit="cover" // @ts-expect-error
            source={require('../assets/frame1.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image5IconPosition: {
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  titleTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.secondaryNotActive_size
  },
  frameIconPosition: {
    top: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  framePosition: {
    left: 38,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  textTypo: {
    color: Color.grayIcon,
    textAlign: 'left',
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    letterSpacing: 0
  },
  frameFlexBox: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  image5Icon: {
    height: 155,
    width: 403
  },
  rm: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.blue,
    height: 40,
    width: 84,
    textAlign: 'left'
  },
  frame1: {
    left: 295,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 84,
    top: 0,
    position: 'absolute',
    height: 242,
    overflow: 'hidden'
  },
  frameIcon: {
    left: 18,
    width: 11,
    height: 213
  },
  location: {
    height: 37,
    width: 75,
    fontSize: FontSize.secondaryNotActive_size,
    color: Color.grayIcon
  },
  frame2: {
    height: 231,
    width: 75
  },
  startingFrom: {
    fontSize: FontSize.size_smi,
    height: 23,
    width: 75
  },
  frame3: {
    left: 300,
    height: 202,
    width: 75
  },
  text: {
    fontSize: FontSize.size_3xs,
    height: 17,
    width: 35
  },
  frame4: {
    height: 241,
    width: 35
  },
  stadiumName: {
    height: 38,
    width: 122
  },
  frame5: {
    left: 12,
    height: 196,
    width: 122
  },
  frameIcon1: {
    left: 17,
    width: 15,
    height: 237
  },
  titleParent: {
    width: 354,
    height: 242
  },
  image5Parent: {
    height: 242,
    width: 403
  },
  frame: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden'
  }
});
