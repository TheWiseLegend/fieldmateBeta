import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components2/Header.jsx';
import { Color, Border, FontSize, FontFamily } from '../GlobalStyles.js';

export default function PaymentSection() {
  return (
    <View style={styles.paymentSection}>
      <Header />
      <View style={styles.paymentSectionChild} />
      <View style={[styles.paymentSectionItem, styles.paymentShadowBox]} />
      <View style={[styles.paymentSectionInner, styles.paymentShadowBox]} />
      <Text style={styles.paymentMethod}>Payment Method</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-10.png')}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/vector7.png')}
      />
      <Text style={styles.confirmBook}>{`Confirm & Book`}</Text>
      <View style={styles.primaryButton}>
        <Text style={styles.confirmPayment}>Confirm Payment</Text>
      </View>

      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/bg.png')}
      />
      <Text style={[styles.pm900, styles.pm900Typo]}>8:00 pm - 9:00 pm</Text>
      <Text style={[styles.bookingDate, styles.bookingTypo]}>Booking Date</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/vector8.png')}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[1]}
        colors={['rgba(119, 119, 119, 0.18)']}
      />
      <Text style={styles.stadiumName}>{`Stadium Name `}</Text>
      <Text
        style={[styles.bookingTime, styles.bookingTypo]}
      >{`Booking Time `}</Text>
      <Text style={[styles.december2024, styles.pm900Typo]}>
        09 December 2024
      </Text>
      <Text style={[styles.cashOnSite, styles.qrTypo]}>Cash (On site)</Text>
      <Image
        style={[styles.paymentSectionChild1, styles.paymentChildLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.cashIcon, styles.cashPosition]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/cash.png')}
      />
      <Text style={[styles.qr, styles.qrPosition]}>QR</Text>
      <Image
        style={[styles.paymentSectionChild2, styles.paymentChildLayout]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.frameIcon, styles.qrPosition]}
        contentFit="cover"
        // @ts-expect-error
        source={require('../assets/frame-3.png')}
      />
      <Text style={[styles.orderDetails, styles.textPosition]}>
        Order Details
      </Text>
      <Text style={[styles.totalCart, styles.totalCartPosition]}>Subtotal</Text>
      <Text style={[styles.text, styles.textPosition]}>$ 80 RM</Text>
      <Text style={[styles.cancellationPolicy, styles.upTo24Layout]}>
        CANCELLATION POLICY
      </Text>
      <Text style={[styles.upTo24, styles.upTo24Layout]}>Up to 24 Hours</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentShadowBox: {
    height: 59,
    width: 393,
    borderWidth: 1,
    borderColor: Color.colorSilver_200,
    borderStyle: 'solid',
    borderRadius: Border.br_lgi,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    backgroundColor: Color.surface
  },
  iconLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  pm900Typo: {
    width: 261,
    fontSize: FontSize.size_sm,
    top: 258,
    height: 33,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    color: Color.colorBlack,
    textAlign: 'left',
    lineHeight: 22,
    position: 'absolute'
  },
  bookingTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.buttonText_size,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute'
  },
  qrTypo: {
    height: 32,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22
  },
  paymentChildLayout: {
    width: 25,
    left: 46,
    height: 25,
    position: 'absolute'
  },
  cashPosition: {
    top: 379,
    position: 'absolute'
  },
  qrPosition: {
    top: 458,
    position: 'absolute'
  },
  textPosition: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsRegular,
    top: '50%',
    position: 'absolute'
  },
  totalCartPosition: {
    left: '10.93%',
    textAlign: 'left'
  },
  upTo24Layout: {
    height: 17,
    textAlign: 'left',
    position: 'absolute'
  },
  paymentSectionChild: {
    top: 540,
    height: 117,
    width: 393,
    borderWidth: 1,
    borderColor: Color.colorSilver_200,
    borderStyle: 'solid',
    borderRadius: Border.br_lgi,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: 17,
    position: 'absolute',
    backgroundColor: Color.surface
  },
  paymentSectionItem: {
    top: 361,
    left: 19,
    height: 59
  },
  paymentSectionInner: {
    top: 440,
    height: 59,
    left: 17
  },
  paymentMethod: {
    top: 317,
    left: 20,
    color: Color.darkGray,
    width: 241,
    height: 25,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
    position: 'absolute'
  },
  ellipseIcon: {
    top: 61,
    left: 13,
    width: 35,
    height: 35,
    position: 'absolute'
  },
  vectorIcon: {
    height: '1.46%',
    width: '5.58%',
    top: '7.73%',
    right: '90%',
    bottom: '90.82%',
    left: '4.42%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  confirmBook: {
    top: 70,
    left: 93,
    fontSize: FontSize.size_13xl,
    width: 267,
    height: 43,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute'
  },
  confirmPayment: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.surface,
    textAlign: 'center',
    fontSize: FontSize.buttonText_size
  },
  primaryButton: {
    top: 832,
    right: 56,
    left: 56,
    borderRadius: Border.br_33xl,
    backgroundColor: Color.colorDarkslategray,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  bgIcon: {
    height: '19.53%',
    marginLeft: -206,
    top: '12.34%',
    bottom: '68.13%',
    left: '50%',
    borderRadius: 18,
    width: 411
  },
  pm900: {
    left: 238,
    height: 33
  },
  bookingDate: {
    top: 224,
    left: 34,
    width: 142,
    height: 33
  },
  vectorIcon1: {
    height: '4.29%',
    width: '6.98%',
    top: '16.52%',
    right: '84.19%',
    bottom: '79.18%',
    left: '8.84%',
    borderRadius: Border.br_10xs,
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  rectangleLineargradient: {
    top: 141,
    left: 22,
    borderRadius: Border.br_3xs,
    width: 62,
    height: 65,
    backgroundColor: 'transparent',
    position: 'absolute'
  },
  stadiumName: {
    height: '5.58%',
    width: '50.7%',
    top: '15.88%',
    left: '30%',
    fontFamily: FontFamily.openSansBold,
    letterSpacing: 0,
    fontWeight: '700',
    color: Color.colorBlack,
    textAlign: 'left',
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
    position: 'absolute'
  },
  bookingTime: {
    top: 223,
    left: 252,
    width: 202,
    height: 35
  },
  december2024: {
    left: 23,
    height: 33
  },
  cashOnSite: {
    left: 78,
    width: 163,
    top: 379,
    position: 'absolute'
  },
  paymentSectionChild1: {
    top: 376
  },
  cashIcon: {
    left: 339,
    width: 26,
    height: 26
  },
  qr: {
    left: 32,
    height: 32,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 22,
    width: 142
  },
  paymentSectionChild2: {
    top: 457
  },
  frameIcon: {
    left: 343,
    width: 101,
    height: 99
  },
  orderDetails: {
    marginTop: 91,
    width: '35.21%',
    letterSpacing: -1,
    height: 41,
    left: '10.93%',
    textAlign: 'left',
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200
  },
  totalCart: {
    marginTop: 151,
    width: '16.42%',
    color: Color.colorLightslategray,
    height: 24,
    fontFamily: FontFamily.poppinsRegular,
    top: '50%',
    left: '10.93%',
    fontSize: FontSize.size_sm,
    position: 'absolute'
  },
  text: {
    marginTop: 148,
    width: '16.19%',
    left: '70.7%',
    fontSize: FontSize.size_lg,
    textAlign: 'right',
    height: 31,
    letterSpacing: 0
  },
  cancellationPolicy: {
    top: 702,
    textDecoration: 'underline',
    color: Color.blue,
    width: 187,
    height: 17,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.buttonText_size,
    left: 19
  },
  upTo24: {
    top: 698,
    left: 262,
    color: 'rgba(243, 10, 10, 0.83)',
    width: 181,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    height: 17
  },
  paymentSection: {
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    backgroundColor: Color.surface
  }
});
