import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtomFrame = ({ buttomFrameMarginTop }) => {
  const buttomFrameStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", buttomFrameMarginTop),
    };
  }, [buttomFrameMarginTop]);

  return (
    <View style={[styles.buttomFrame, buttomFrameStyle]}>
      <View style={styles.navigation} />
      <Image
        style={[styles.stadiumIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/stadium.png")}
      />
      <Image
        style={[styles.soccerIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/soccer.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.scheduleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/schedule.png")}
      />
      <Text style={[styles.stadiums, styles.homeTypo]}>Stadiums</Text>
      <Text style={[styles.matches, styles.homeTypo]}>Matches</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.myActivity, styles.homeTypo]}>My activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 32,
    width: 37,
  },
  iconPosition: {
    top: 17,
    position: "absolute",
  },
  homeTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.caption_size,
    position: "absolute",
  },
  navigation: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(84, 87, 92, 0.05)",
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.surface,
    position: "absolute",
  },
  stadiumIcon: {
    top: 19,
    left: 56,
    position: "absolute",
  },
  soccerIcon: {
    left: 155,
    width: 39,
    height: 34,
  },
  vectorIcon: {
    height: "45.71%",
    width: "8.53%",
    top: "24.29%",
    right: "32.53%",
    bottom: "30%",
    left: "58.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  scheduleIcon: {
    left: 352,
    height: 32,
    width: 37,
  },
  stadiums: {
    left: 46,
    height: 13,
    width: 72,
    top: 51,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.caption_size,
  },
  matches: {
    left: 142,
    height: 13,
    width: 72,
    top: 51,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.caption_size,
  },
  home: {
    top: 52,
    left: 253,
    width: 46,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.caption_size,
  },
  myActivity: {
    left: 339,
    height: 13,
    width: 72,
    top: 51,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.caption_size,
  },
  buttomFrame: {
    alignSelf: "stretch",
    height: 70,
    marginTop: -17,
  },
});

export default ButtomFrame;
