import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, Button } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import GroupComponent from '../components/GroupComponent';
import Recommendation from '../components2/Recommendation';

import {
    Padding,
    Border,
    Color,
    FontSize,
    FontFamily,
    Gap
} from '../GlobalStyles';

export default function Home() {
    return (
        <View style={styles.home}>
            <Octicons
                name="three-bars"
                size={24}
                color="black"
                style={[styles.menuButton, styles.menuLayout]}
                onPress={() => alert('This is a button!')}
            />
            <Recommendation />
            <Text style={[styles.headline, styles.headlineFlexBox]}>
                Matches near you
            </Text>
            <GroupComponent groupViewTop={466} groupViewLeft={10} />
            <Image
                style={styles.homeItem}
                contentFit="cover"
                source={require('../assets/ellipse-9.png')}
            />
            <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/vector5.png')}
            />
            <Image
                style={styles.image2Icon}
                contentFit="cover"
                source={require('../assets/image-2.png')}
            />
            <Image
                style={styles.doorbellIcon}
                contentFit="cover"
                source={require('../assets/doorbell.png')}
            />
            <Image
                style={[styles.ellipseIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/ellipse-2.png')}
            />
            <Image
                style={[styles.homeChild1, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/vector-2.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menuLayout: {
        paddingHorizontal: Padding.p_3xs,
        height: 48,
        width: 48,
        borderRadius: Border.br_9xs,
        position: 'absolute',
        overflow: 'hidden'
    },
    rectangleLayout: {
        backgroundColor: Color.colorsPurple,
        height: 3,
        width: 28,
        borderRadius: Border.br_9xs
    },
    headlineFlexBox: {
        textAlign: 'left',
        letterSpacing: 0
    },
    iconLayout1: {
        maxHeight: '100%',
        position: 'absolute'
    },
    title2Position: {
        left: '50%',
        position: 'absolute'
    },
    rectangle: {
        backgroundColor: Color.colorMediumslateblue,
        height: 3,
        width: 28,
        borderRadius: Border.br_9xs
    },
    menuButton1: {
        top: 0,
        justifyContent: 'flex-end',
        paddingTop: Padding.p_xs,
        paddingBottom: Padding.p_smi_4,
        gap: Gap.gap_md,
        zIndex: 0,
        left: 0
    },
    rectangle3: {
        zIndex: 1
    },
    rectangle4: {
        zIndex: 2
    },
    rectangle5: {
        zIndex: 3
    },
    menuButton: {
        top: 59,
        paddingVertical: Padding.p_xs,
        gap: 7,
        left: 21
    },
    headline: {
        top: 413,
        left: 12,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: FontFamily.title1,
        color: Color.colorBlack,
        fontSize: FontSize.title2_size,
        textAlign: 'left',
        letterSpacing: 0,
        position: 'absolute'
    },
    homeItem: {
        top: 518,
        width: 41,
        height: 43,
        left: 21,
        position: 'absolute'
    },
    vectorIcon: {
        height: '2.15%',
        width: '4.19%',
        top: '55.58%',
        right: '75.81%',
        bottom: '42.27%',
        left: '20%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    },
    image2Icon: {
        top: 231,
        display: 'none',
        height: 120,
        width: 195,
        left: 16,
        borderRadius: Border.br_9xs,
        position: 'absolute'
    },
    doorbellIcon: {
        left: 362,
        width: 40,
        height: 45,
        top: 56,
        position: 'absolute'
    },
    ellipseIcon: {
        height: '1.29%',
        width: '2.79%',
        top: '6.55%',
        right: '7.67%',
        bottom: '92.17%',
        left: '89.53%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    },
    homeChild1: {
        top: 415,
        left: 60,
        width: 311
    },
    rectangleIcon: {
        marginLeft: -97,
        borderRadius: Border.br_8xs,
        width: 191,
        top: 56,
        left: '50%',
        height: 39
    },
    title2: {
        height: '3%',
        marginLeft: -32,
        top: '6.33%',
        width: 63,
        fontFamily: FontFamily.secondaryNotActive,
        lineHeight: 22,
        left: '50%',
        textAlign: 'left',
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: FontSize.title2_size
    },
    home: {
        backgroundColor: Color.surface,
        flex: 1,
        width: '100%',
        height: 932,
        overflow: 'hidden',
        borderRadius: Border.br_mini
    }
});
