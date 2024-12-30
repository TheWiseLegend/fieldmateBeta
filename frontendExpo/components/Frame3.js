import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameBorder]} />
          <Image
            style={[styles.glyphsTabBarSearch, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-glyphs--tab-bar--search.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.selectState, styles.allCitesTypo]}>
            <Text style={styles.select}>Select</Text>
            <Text style={styles.text}>{`   `}</Text>
            <Text style={styles.state}>State</Text>
          </Text>
        </View>
        <View style={[styles.frame3, styles.frameBorder]}>
          <View style={styles.frame4}>
            <View style={styles.glyphsTabBarSearch1}>
              <Image
                style={styles.glyphsTabBarSearchChild}
                contentFit="cover"
                source={require("../assets/group-692.png")}
              />
            </View>
            <Text style={[styles.allCites, styles.allCitesTypo]}>
              All Cites
            </Text>
          </View>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
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
  frameLayout: {
    width: 170,
    overflow: "hidden",
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  allCitesTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.secondaryNotActive,
    letterSpacing: 0,
  },
  frameChild: {
    height: "75.86%",
    width: "100%",
    top: "6.9%",
    right: "0%",
    bottom: "17.24%",
    left: "0%",
    position: "absolute",
  },
  glyphsTabBarSearch: {
    height: "48.28%",
    width: "17.65%",
    top: "20.69%",
    right: "78.82%",
    bottom: "31.03%",
    left: "3.53%",
  },
  vectorIcon: {
    height: "15%",
    width: "10.47%",
    top: "36.21%",
    right: "6%",
    bottom: "48.79%",
    left: "83.53%",
  },
  select: {
    fontSize: FontSize.size_smi,
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  state: {
    fontSize: FontSize.size_mini,
  },
  selectState: {
    height: "100%",
    width: "51.76%",
    top: "0%",
    left: "22.94%",
    position: "absolute",
  },
  frame2: {
    height: 58,
  },
  glyphsTabBarSearchChild: {
    height: 18,
    width: 18,
  },
  glyphsTabBarSearch1: {
    width: 30,
    justifyContent: "center",
    height: 28,
    alignItems: "center",
  },
  allCites: {
    width: 88,
    height: 19,
    marginLeft: -1,
    fontSize: FontSize.size_lg,
  },
  frame4: {
    width: 117,
    height: 28,
    flexDirection: "row",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: 9,
    width: 18,
  },
  frame3: {
    paddingHorizontal: 3,
    paddingVertical: Padding.p_5xs,
    width: 170,
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame: {
    top: 156,
    left: 22,
    width: 389,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame3;
