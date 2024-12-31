// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View } from "react-native";
// import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

// const Frame4 = () => {
//   return (
//     <View style={styles.frame}>
//       <View style={styles.imageParent}>
//         <Image
//           style={[styles.imageIcon, styles.imageIconPosition]}
//           contentFit="cover"
//           source={require("../assets/image.png")}
//         />
//         <View style={[styles.vectorParent, styles.imageIconPosition]}>
//           <Image
//             style={[styles.frameChild, styles.frameChildLayout]}
//             contentFit="cover"
//             source={require("../assets/rectangle-5.png")}
//           />
//           <Text style={styles.rm}>30.00 RM</Text>
//           <Image
//             style={[styles.vectorIcon, styles.frameChildLayout]}
//             contentFit="cover"
//             source={require("../assets/vector.png")}
//           />
//           <Text style={[styles.title, styles.titleTypo]}>{`Name `}</Text>
//           <Text style={[styles.location, styles.textTypo]}>Location</Text>
//           <Text style={[styles.startingFrom, styles.textTypo]}>
//             Starting from
//           </Text>
//           <Text style={[styles.text, styles.textTypo]}>4.2/5</Text>
//           <Text
//             style={[styles.stadiumName, styles.titleTypo]}
//           >{`Stadium Name `}</Text>
//           <Image
//             style={styles.starRateIcon}
//             contentFit="cover"
//             source={require("../assets/star-rate.png")}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageIconPosition: {
//     borderTopRightRadius: Border.br_mini,
//     borderTopLeftRadius: Border.br_mini,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   frameChildLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   titleTypo: {
//     color: Color.colorBlack,
//     fontFamily: FontFamily.secondaryNotActive,
//     lineHeight: 22,
//     letterSpacing: 0,
//     fontSize: FontSize.secondaryNotActive_size,
//     textAlign: "left",
//     position: "absolute",
//   },
//   textTypo: {
//     color: Color.grayIcon,
//     fontFamily: FontFamily.secondaryNotActive,
//     lineHeight: 22,
//     letterSpacing: 0,
//     textAlign: "left",
//     position: "absolute",
//   },
//   imageIcon: {
//     height: 155,
//     width: 403,
//   },
//   frameChild: {
//     height: "100%",
//     width: "114.49%",
//     top: "0%",
//     right: "-14.49%",
//     bottom: "0%",
//     left: "0%",
//     borderRadius: Border.br_mini,
//   },
//   rm: {
//     height: "16.57%",
//     width: "23.73%",
//     top: "83.43%",
//     left: "83.33%",
//     fontSize: FontSize.size_lg,
//     lineHeight: 28,
//     fontWeight: "600",
//     fontFamily: FontFamily.title1,
//     color: Color.blue,
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIcon: {
//     height: "6.2%",
//     width: "3.11%",
//     top: "81.82%",
//     right: "91.81%",
//     bottom: "11.98%",
//     left: "5.08%",
//     borderRadius: Border.br_10xs,
//   },
//   title: {
//     height: "13.02%",
//     width: "12.99%",
//     top: "55.62%",
//     left: "2.26%",
//     display: "none",
//   },
//   location: {
//     height: "15.37%",
//     top: "80.17%",
//     left: "10.73%",
//     color: Color.grayIcon,
//     width: "21.19%",
//     fontSize: FontSize.secondaryNotActive_size,
//   },
//   startingFrom: {
//     height: "9.3%",
//     top: "74.34%",
//     left: "84.75%",
//     fontSize: FontSize.size_smi,
//     width: "21.19%",
//   },
//   text: {
//     height: "7.07%",
//     width: "9.89%",
//     top: "92.48%",
//     fontSize: FontSize.size_3xs,
//     left: "10.73%",
//     color: Color.grayIcon,
//   },
//   stadiumName: {
//     height: "15.5%",
//     width: "34.46%",
//     top: "65.41%",
//     left: "3.39%",
//   },
//   starRateIcon: {
//     top: 222,
//     left: 17,
//     width: 15,
//     height: 15,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   vectorParent: {
//     width: 354,
//     height: 242,
//   },
//   imageParent: {
//     height: 242,
//     width: 403,
//   },
//   frame: {
//     alignSelf: "stretch",
//     alignItems: "flex-end",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
// });

// export default Frame4;
