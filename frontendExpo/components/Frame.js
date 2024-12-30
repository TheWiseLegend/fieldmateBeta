import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({ frameTop, backgroundBorderColor, pM, pMColor, pM1, pM2 }) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frameTop),
    };
  }, [frameTop]);

  const backgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", backgroundBorderColor),
    };
  }, [backgroundBorderColor]);

  const pMStyle = useMemo(() => {
    return {
      ...getStyleValue("color", pMColor),
    };
  }, [pMColor]);

  return (
    <View style={[styles.frame, styles.frameFlexBox, frameStyle]}>
      <View style={styles.date}>
        <View
          style={[styles.background, styles.backgroundLayout, backgroundStyle]}
        />
        <Text style={[styles.pm, styles.pmTypo, pMStyle]}>{pM}</Text>
      </View>
      <View style={[styles.date1, styles.frameFlexBox]}>
        <View style={styles.date}>
          <View style={[styles.background1, styles.backgroundLayout]} />
          <Text style={[styles.pm1, styles.pmTypo]}>{pM1}</Text>
        </View>
        <View style={styles.date}>
          <View style={[styles.background1, styles.backgroundLayout]} />
          <Text style={[styles.pm1, styles.pmTypo]}>{pM2}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  backgroundLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    height: 47,
    width: 93,
    position: "absolute",
  },
  pmTypo: {
    height: 21,
    width: 44,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: 14,
    marginLeft: -20,
    position: "absolute",
  },
  background: {
    borderColor: Color.blue,
  },
  pm: {
    color: Color.colorRoyalblue_100,
  },
  date: {
    height: 47,
    width: 93,
  },
  background1: {
    borderColor: Color.colorLightgray,
  },
  pm1: {
    color: Color.colorSilver_200,
  },
  date1: {
    width: 210,
  },
  frame: {
    top: 408,
    left: 52,
    width: 326,
    overflow: "hidden",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Frame;
