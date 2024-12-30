import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import GroupComponent from "../components/GroupComponent";
import IPhoneXSBarsStatusDe from "../components/IPhoneXSBarsStatusDe";
import { useFonts } from "expo-font";


import {
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <View style={[styles.menuButton, styles.menuLayout]}>
        <View style={[styles.menuButton1, styles.menuLayout]}>
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
        </View>
        <View style={[styles.rectangle3, styles.rectangleLayout]} />
        <View style={[styles.rectangle4, styles.rectangleLayout]} />
        <View style={[styles.rectangle5, styles.rectangleLayout]} />
      </View>
      <Text style={[styles.headline, styles.headlineFlexBox]}>
        Matches near you
      </Text>
      <GroupComponent groupViewTop={466} groupViewLeft={10} />
      <View style={styles.month}>
        <Text style={[styles.subtitle3, styles.headlineFlexBox]}>
          What are you looking for?
        </Text>
      </View>
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <Text style={[styles.title, styles.titleTypo]}>Matches</Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Text style={[styles.title1, styles.titleTypo]}>Stadiums</Text>
      <Image
        style={styles.doorbellIcon}
        contentFit="cover"
        source={require("../assets/doorbell.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.homeChild1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.title2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.title2, styles.title2Position]}>Home</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <IPhoneXSBarsStatusDe
        iPhoneXSBarsStatusDeRight="0%"
        iPhoneXSBarsStatusDeLeft="0%"
        iPhoneXSBarsStatusDePosition="absolute"
        iPhoneXSBarsStatusDeHeight="5.42%"
        iPhoneXSBarsStatusDeTop="0%"
        iPhoneXSBarsStatusDeBottom="94.58%"
        iPhoneXSBarsStatusDeAlignSelf="unset"
        wiFi={require("../assets/wifi.png")}
        notchIconMarginLeft={-110}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    paddingHorizontal: Padding.p_3xs,
    height: 48,
    width: 48,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    backgroundColor: Color.colorsPurple,
    height: 3,
    width: 28,
    borderRadius: Border.br_9xs,
  },
  headlineFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout: {
    top: 263,
    height: 120,
    width: 195,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  homeInnerPosition: {
    opacity: 0.5,
    backgroundColor: Color.colorBlack,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    top: 344,
    height: 39,
    width: 195,
    position: "absolute",
  },
  titleTypo: {
    color: Color.surface,
    fontSize: FontSize.secondaryNotActive_size,
    top: "37.77%",
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  title2Position: {
    left: "50%",
    position: "absolute",
  },
  homeChild: {
    top: 195,
    borderRadius: Border.br_smi,
    width: 430,
    height: 215,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorMediumslateblue,
    height: 3,
    width: 28,
    borderRadius: Border.br_9xs,
  },
  menuButton1: {
    top: 0,
    justifyContent: "flex-end",
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_smi_4,
    gap: Gap.gap_md,
    zIndex: 0,
    left: 0,
  },
  rectangle3: {
    zIndex: 1,
  },
  rectangle4: {
    zIndex: 2,
  },
  rectangle5: {
    zIndex: 3,
  },
  menuButton: {
    top: 59,
    paddingVertical: Padding.p_xs,
    gap: 7,
    left: 21,
  },
  headline: {
    top: 413,
    left: 12,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.title1,
    color: Color.colorBlack,
    fontSize: FontSize.title2_size,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  subtitle3: {
    fontSize: FontSize.size_lg_6,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.onSurfaceMediumEmphasis,
    textAlign: "left",
    letterSpacing: 0,
  },
  month: {
    top: 209,
    left: 18,
    width: 192,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeItem: {
    top: 518,
    width: 41,
    height: 43,
    left: 21,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.15%",
    width: "4.19%",
    top: "55.58%",
    right: "75.81%",
    bottom: "42.27%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  image2Icon: {
    top: 231,
    display: "none",
    height: 120,
    width: 195,
    left: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image3Icon: {
    left: 16,
  },
  image4Icon: {
    left: 223,
  },
  homeInner: {
    left: 223,
  },
  title: {
    left: "66.51%",
  },
  rectangleView: {
    left: 16,
  },
  title1: {
    left: "18.84%",
  },
  doorbellIcon: {
    left: 362,
    width: 40,
    height: 45,
    top: 56,
    position: "absolute",
  },
  ellipseIcon: {
    height: "1.29%",
    width: "2.79%",
    top: "6.55%",
    right: "7.67%",
    bottom: "92.17%",
    left: "89.53%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  homeChild1: {
    top: 415,
    left: 60,
    width: 311,
  },
  rectangleIcon: {
    marginLeft: -97,
    borderRadius: Border.br_8xs,
    width: 191,
    top: 56,
    left: "50%",
    height: 39,
  },
  title2: {
    height: "3%",
    marginLeft: -32,
    top: "6.33%",
    width: 63,
    fontFamily: FontFamily.secondaryNotActive,
    lineHeight: 22,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.title2_size,
  },
  icon: {
    width: 20,
    height: 21,
  },
  home: {
    backgroundColor: Color.surface,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    borderRadius: Border.br_mini,
  },
});

export default Home;
