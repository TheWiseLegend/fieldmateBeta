import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from './ui/radio';
import { CircleIcon, Icon } from './ui/icon';
import { VStack } from './ui/vstack';
import { QrCode, Banknote } from 'lucide-react-native';
import { DBContext } from '../db.js';

/**
 * @param {object} props
 * @param {function} props.onPaymentMethodChange
 */
export default function PaymentSelection({ onPaymentMethodChange }) {
  const [payMethod, setPayMethod] = useState('');
  const db = useContext(DBContext);

  if (!db.view.field) return <Text>No field to view</Text>;

  useEffect(() => {
    onPaymentMethodChange(payMethod);
  }, [payMethod]);

  function showCancellationPolicy() {
    Alert.alert(
      'Cancellation Policy',
      'Payments made for football field bookings are generally non-refundable. However, cancellations made at least 24 hours prior to the booking time may qualify for rescheduling, subject to field availability. Rescheduled bookings must be used within 30 days and cannot be rescheduled again. No-shows or cancellations within 24 hours of the booking time will result in the forfeiture of the payment.'
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Payment Method</Text>

      <RadioGroup value={payMethod} onChange={setPayMethod} style={{ paddingTop: 20 }}>
        <VStack space="sm">
          <Radio value="Cash" style={style.card}>
            <View style={[style.flexRow, { width: '100%' }]}>
              <View style={[style.flexRow, { width: '40%' }]}>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>

                <RadioLabel>Cash (On Site)</RadioLabel>
              </View>

              <View>
                <Icon size="md" as={Banknote}></Icon>
              </View>
            </View>
          </Radio>
          <Radio value="QR" style={style.card}>
            <View style={[style.flexRow, { width: '100%' }]}>
              <View style={[style.flexRow, { width: '16%' }]}>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>

                <RadioLabel>QR</RadioLabel>
              </View>

              <View>
                <Icon size="md" as={QrCode}></Icon>
              </View>
            </View>
          </Radio>
        </VStack>
      </RadioGroup>

      {payMethod === 'QR' && (
        <View style={style.qrView}>
          {/* @ts-expect-error */}
          <Image source={require('../assets/qrcode.png')} style={style.qrImage} />
        </View>
      )}

      <View style={[style.card2]}>
        <View>
          <Text style={style.cardTitle}>Order Details</Text>
        </View>

        <View style={[style.flexRow, { width: '99%' }]}>
          <Text style={style.grayText}>Subtotal</Text>
          <Text style={style.priceText}>RM {db.view.field.price}</Text>
        </View>
      </View>

      <View style={[style.flexRow, { width: '95%', marginTop: 30 }]}>
        <TouchableOpacity onPress={showCancellationPolicy}>
          <Text style={style.cancelText}>CANCELLATION POLICY</Text>
        </TouchableOpacity>
        <Text style={style.timeText}>Up To 24 Hours</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#595959'
  },
  container: {
    padding: 20,
    paddingTop: 40
  },
  card: {
    elevation: 5,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '95%',
    height: 59,
    marginBottom: 7,
    borderWidth: 1, // Added line
    borderColor: '#BABABA' // Added line
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card2: {
    elevation: 5,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '95%',
    height: 110,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1, // Added line
    borderColor: '#BABABA' // Added line
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 10
  },
  grayText: {
    color: '#8E99AF'
  },
  priceText: {
    color: '#21293A',
    fontWeight: 'bold'
  },
  cancelText: {
    color: '#007AFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  timeText: {
    color: '#F30A0AD4',
    fontWeight: 'bold'
  },
  qrView: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center'
  },
  qrImage: {
    width: 200,
    height: 200
    // resizeMode: 'contain'
  }
});
