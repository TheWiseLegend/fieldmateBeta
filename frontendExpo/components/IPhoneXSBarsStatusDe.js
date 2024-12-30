import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IPhoneXSBarsStatusDe = ({
  iPhoneXSBarsStatusDeRight,
  iPhoneXSBarsStatusDeLeft,
  iPhoneXSBarsStatusDeBorderTopLeftRadius,
  iPhoneXSBarsStatusDeBorderTopRightRadius,
  iPhoneXSBarsStatusDePosition,
  iPhoneXSBarsStatusDeHeight,
  iPhoneXSBarsStatusDeTop,
  iPhoneXSBarsStatusDeBottom,
  iPhoneXSBarsStatusDeAlignSelf,
  wiFi,
  notchIconMarginLeft,
}) => {
  const iPhoneXSBarsStatusDeStyle = useMemo(() => {
    return {
      ...getStyleValue("right", iPhoneXSBarsStatusDeRight),
      ...getStyleValue("left", iPhoneXSBarsStatusDeLeft),
      ...getStyleValue(
        "borderTopLeftRadius",
        iPhoneXSBarsStatusDeBorderTopLeftRadius
      ),
      ...getStyleValue(
        "borderTopRightRadius",
        iPhoneXSBarsStatusDeBorderTopRightRadius
      ),
      ...getStyleValue("position", iPhoneXSBarsStatusDePosition),
      ...getStyleValue("height", iPhoneXSBarsStatusDeHeight),
      ...getStyleValue("top", iPhoneXSBarsStatusDeTop),
      ...getStyleValue("bottom", iPhoneXSBarsStatusDeBottom),
      ...getStyleValue("alignSelf", iPhoneXSBarsStatusDeAlignSelf),
    };
  }, [
    iPhoneXSBarsStatusDeRight,
    iPhoneXSBarsStatusDeLeft,
    iPhoneXSBarsStatusDeBorderTopLeftRadius,
    iPhoneXSBarsStatusDeBorderTopRightRadius,
    iPhoneXSBarsStatusDePosition,
    iPhoneXSBarsStatusDeHeight,
    iPhoneXSBarsStatusDeTop,
    iPhoneXSBarsStatusDeBottom,
    iPhoneXSBarsStatusDeAlignSelf,
  ]);

  const notchIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", notchIconMarginLeft),
    };
  }, [notchIconMarginLeft]);

  return (
    <View style={[styles.iphoneXsBarsStatusDe, iPhoneXSBarsStatusDeStyle]}>
      <View style={[styles.action, styles.timePosition]}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
      </View>
      <View style={[styles.container, styles.containerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.containerPosition]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.combinedShapeIcon}
          contentFit="cover"
          source={require("../assets/combined-shape.png")}
        />
        <Image style={styles.wiFiIcon} contentFit="cover" source={wiFi} />
      </View>
      <Image
        style={[styles.notchIcon, notchIconStyle]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -9,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.surface,
    textAlign: "center",
  },
  action: {
    marginTop: -8.25,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -5.05,
    right: 15,
    width: 67,
  },
  notchIcon: {
    marginLeft: -110,
    top: -2,
    left: "50%",
    width: 219,
    height: 30,
    display: "none",
    position: "absolute",
  },
  iphoneXsBarsStatusDe: {
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
});

export default IPhoneXSBarsStatusDe;
