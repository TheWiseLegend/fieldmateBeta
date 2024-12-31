import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

export default function StadiumCard() {
    return (
        <>
            <View style={styles.frame}>
                <View style={styles.image5Parent}>
                    <Image
                        style={[styles.image5Icon, styles.image5IconPosition]}
                        contentFit="cover"
                        source={require('../assets/image-5.png')}
                    />
                    <View
                        style={[styles.titleParent, styles.image5IconPosition]}
                    >
                        <Text
                            style={[styles.title, styles.titleTypo]}
                        >{`Name `}</Text>
                        <Image
                            style={styles.frameChild}
                            contentFit="cover"
                            source={require('../assets/rectangle-5.png')}
                        />
                        <View style={styles.frame1}>
                            <Text style={styles.rm}>30.00 RM</Text>
                        </View>
                        <Image
                            style={[styles.frameIcon, styles.frameIconPosition]}
                            contentFit="cover"
                            source={require('../assets/frame.png')}
                        />
                        <View style={[styles.frame2, styles.framePosition]}>
                            <Text style={[styles.location, styles.textTypo]}>
                                Location
                            </Text>
                        </View>
                        <View style={[styles.frame3, styles.frameFlexBox]}>
                            <Text
                                style={[styles.startingFrom, styles.textTypo]}
                            >
                                Starting from
                            </Text>
                        </View>
                        <View style={[styles.frame4, styles.framePosition]}>
                            <Text style={[styles.text, styles.textTypo]}>
                                4.2/5
                            </Text>
                        </View>
                        <View style={[styles.frame5, styles.frameFlexBox]}>
                            <Text
                                style={[styles.stadiumName, styles.titleTypo]}
                            >{`Stadium Name `}</Text>
                        </View>
                        <Image
                            style={[
                                styles.frameIcon1,
                                styles.frameIconPosition
                            ]}
                            contentFit="cover"
                            source={require('../assets/frame1.png')}
                        />
                    </View>
                </View>
            </View>

            {/* <View style={styles.frame}>
                <View style={styles.imageParent}>
                    <Image
                        style={[styles.imageIcon, styles.imageIconPosition]}
                        contentFit="cover"
                        source={require('../assets/image.png')}
                    />
                    <View
                        style={[styles.vectorParent, styles.imageIconPosition]}
                    >
                        <Image
                            style={[styles.frameChild, styles.frameChildLayout]}
                            contentFit="cover"
                            source={require('../assets/rectangle-5.png')}
                        />
                        <Text style={styles.rm}>30.00 RM</Text>
                        <Image
                            style={[styles.vectorIcon, styles.frameChildLayout]}
                            contentFit="cover"
                            source={require('../assets/vector.png')}
                        />
                        <Text
                            style={[styles.title, styles.titleTypo]}
                        >{`Name `}</Text>
                        <Text style={[styles.location, styles.textTypo]}>
                            Location
                        </Text>
                        <Text style={[styles.startingFrom, styles.textTypo]}>
                            Starting from
                        </Text>
                        <Text style={[styles.text, styles.textTypo]}>
                            4.2/5
                        </Text>
                        <Text
                            style={[styles.stadiumName, styles.titleTypo]}
                        >{`Stadium Name `}</Text>
                        <Image
                            style={styles.starRateIcon}
                            contentFit="cover"
                            source={require('../assets/star-rate.png')}
                        />
                    </View>
                </View>
            </View> */}
        </>
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
    title: {
        height: '13.02%',
        width: '12.99%',
        top: '55.62%',
        left: '2.26%',
        display: 'none',
        position: 'absolute'
    },
    frameChild: {
        height: '100%',
        width: '114.49%',
        top: '0%',
        right: '-14.49%',
        bottom: '0%',
        left: '0%',
        borderRadius: Border.br_mini,
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'absolute',
        overflow: 'hidden'
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



// const styles = StyleSheet.create({
//     imageIconPosition: {
//       borderTopRightRadius: Border.br_mini,
//       borderTopLeftRadius: Border.br_mini,
//       left: 0,
//       top: 0,
//       position: "absolute",
//     },
//     frameChildLayout: {
//       maxHeight: "100%",
//       maxWidth: "100%",
//       position: "absolute",
//       overflow: "hidden",
//     },
//     titleTypo: {
//       color: Color.colorBlack,
//       fontFamily: FontFamily.secondaryNotActive,
//       lineHeight: 22,
//       letterSpacing: 0,
//       fontSize: FontSize.secondaryNotActive_size,
//       textAlign: "left",
//       position: "absolute",
//     },
//     textTypo: {
//       color: Color.grayIcon,
//       fontFamily: FontFamily.secondaryNotActive,
//       lineHeight: 22,
//       letterSpacing: 0,
//       textAlign: "left",
//       position: "absolute",
//     },
//     imageIcon: {
//       height: 155,
//       width: 403,
//     },
//     frameChild: {
//       height: "100%",
//       width: "114.49%",
//       top: "0%",
//       right: "-14.49%",
//       bottom: "0%",
//       left: "0%",
//       borderRadius: Border.br_mini,
//     },
//     rm: {
//       height: "16.57%",
//       width: "23.73%",
//       top: "83.43%",
//       left: "83.33%",
//       fontSize: FontSize.size_lg,
//       lineHeight: 28,
//       fontWeight: "600",
//       fontFamily: FontFamily.title1,
//       color: Color.blue,
//       textAlign: "left",
//       position: "absolute",
//     },
//     vectorIcon: {
//       height: "6.2%",
//       width: "3.11%",
//       top: "81.82%",
//       right: "91.81%",
//       bottom: "11.98%",
//       left: "5.08%",
//       borderRadius: Border.br_10xs,
//     },
//     title: {
//       height: "13.02%",
//       width: "12.99%",
//       top: "55.62%",
//       left: "2.26%",
//       display: "none",
//     },
//     location: {
//       height: "15.37%",
//       top: "80.17%",
//       left: "10.73%",
//       color: Color.grayIcon,
//       width: "21.19%",
//       fontSize: FontSize.secondaryNotActive_size,
//     },
//     startingFrom: {
//       height: "9.3%",
//       top: "74.34%",
//       left: "84.75%",
//       fontSize: FontSize.size_smi,
//       width: "21.19%",
//     },
//     text: {
//       height: "7.07%",
//       width: "9.89%",
//       top: "92.48%",
//       fontSize: FontSize.size_3xs,
//       left: "10.73%",
//       color: Color.grayIcon,
//     },
//     stadiumName: {
//       height: "15.5%",
//       width: "34.46%",
//       top: "65.41%",
//       left: "3.39%",
//     },
//     starRateIcon: {
//       top: 222,
//       left: 17,
//       width: 15,
//       height: 15,
//       position: "absolute",
//       overflow: "hidden",
//     },
//     vectorParent: {
//       width: 354,
//       height: 242,
//     },
//     imageParent: {
//       height: 242,
//       width: 403,
//     },
//     frame: {
//       alignSelf: "stretch",
//       alignItems: "flex-end",
//       justifyContent: "center",
//       overflow: "hidden",
//     },
//   });
