import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Frame7 from "../components/Frame7";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import ButtomFrame from "../components/ButtomFrame";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const StadiumView = () => {
  return (
    <View style={styles.stadiumView}>
      <View style={[styles.bookingStadiums, styles.frame3FlexBox]}>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={styles.frame}>
          <Text style={styles.facilities}>Facilities</Text>
        </View>
        <View style={styles.frame1}>
          <Text
            style={[styles.stadiumName, styles.stadiumNameTypo]}
          >{`Stadium Name `}</Text>
        </View>
        <Frame7 />
        <View style={styles.frame2}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frame3, styles.frame3FlexBox]}>
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <Text style={[styles.seeAllReviews, styles.textLayout]}>
                See all reviews
              </Text>
              <Text style={[styles.text, styles.textLayout]}>4.2/5 (33)</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <View style={styles.background} />
            <View style={[styles.date, styles.dateFlexBox]}>
              <View style={styles.background} />
              <View style={[styles.date1, styles.dateFlexBox]}>
                <View style={styles.background} />
                <View style={styles.background} />
              </View>
            </View>
          </View>
        </View>
        <FrameComponent />
        <FrameComponent1 />
        <Image
          style={[styles.bookingStadiumsChild, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
      </View>
      <ButtomFrame buttomFrameMarginTop={-18} />
    </View>
  );
};

const styles = StyleSheet.create({
  frame3FlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  stadiumNameTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  groupIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  textLayout: {
    height: "88.89%",
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 22,
    position: "absolute",
  },
  dateFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  image2Icon: {
    top: 231,
    left: 16,
    borderRadius: Border.br_9xs,
    width: 195,
    height: 120,
    display: "none",
    position: "absolute",
  },
  facilities: {
    fontSize: FontSize.buttonText_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkGray,
    width: 169,
    height: 25,
    textAlign: "left",
    lineHeight: 22,
  },
  frame: {
    top: 406,
    left: 33,
    width: 398,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  stadiumName: {
    fontSize: 30,
    width: 220,
    height: 37,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 22,
  },
  frame1: {
    top: 299,
    left: 21,
    width: 410,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "92.59%",
    width: "7.16%",
    top: "0%",
    right: "92.84%",
    bottom: "7.41%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  seeAllReviews: {
    width: "49.35%",
    top: "11.11%",
    left: "50.65%",
    fontSize: FontSize.secondaryNotActive_size,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  text: {
    width: "34.84%",
    top: "3.7%",
    left: "7.74%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.secondaryNotActive,
    color: Color.colorBlack,
  },
  frame3: {
    height: 27,
    overflow: "hidden",
  },
  frameWrapper: {
    width: 310,
    justifyContent: "center",
    alignItems: "center",
  },
  frame2: {
    top: 341,
    left: 20,
    width: 411,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  background: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 62,
    height: 54,
  },
  date1: {
    width: 167,
  },
  date: {
    width: 260,
  },
  frame5: {
    gap: 30,
    flexDirection: "row",
    height: 54,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame4: {
    top: 432,
    left: 31,
    width: 400,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  bookingStadiumsChild: {
    top: 295,
    left: 61,
    width: 311,
  },
  bookingStadiums: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.surface,
    height: 932,
    overflow: "hidden",
  },
  stadiumView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default StadiumView;
