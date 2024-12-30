import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import IPhoneXSBarsStatusDe from "./IPhoneXSBarsStatusDe";
import { Border } from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <IPhoneXSBarsStatusDe
          iPhoneXSBarsStatusDeRight="unset"
          iPhoneXSBarsStatusDeLeft="unset"
          iPhoneXSBarsStatusDePosition="relative"
          iPhoneXSBarsStatusDeHeight={51}
          iPhoneXSBarsStatusDeTop="unset"
          iPhoneXSBarsStatusDeBottom="unset"
          iPhoneXSBarsStatusDeAlignSelf="stretch"
          wiFi={require("../assets/wifi1.png")}
          notchIconMarginLeft={-109.5}
        />
        <Image
          style={[styles.image5Icon, styles.frame1FlexBox]}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  image5Icon: {
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    maxWidth: "100%",
    height: 244,
    width: "100%",
    marginTop: -3,
  },
  frame1: {
    alignItems: "center",
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 431,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Frame7;
