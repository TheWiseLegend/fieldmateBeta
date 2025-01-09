/** @import { MyNavigationProp } from '../types.js' */
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import BookPaymentInfo from '../components/BookPaymentInfo.jsx';
import PaymentSelection from '../components/PaymentSelection.jsx';
import FinalButton from '../components/FinalButton.jsx';
import axios from 'axios';
import { DBContext } from '../db.js';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function PaymentSection() {
  const [paymentMethod, setPaymentMethod] = useState('');
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const db = useContext(DBContext);

  async function submitPayment() {
    const { time, duration } = db.view.booking;
    const booking = {
      user_id: db.view.user.user_id,
      field_id: db.view.field.field_id,
      start_datetime: time,
      duration,
      current_players: 0
    };

    try {
      await axios.post(`${BASE_URL}/bookings`, booking, { headers: { 'Content-Type': 'application/json' } });
      // alert('Booking successful!');
      navigation.navigate('Stadiums');
    } catch (err) {
      console.error('Error creating booking:', err.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <BookPaymentInfo />

        <PaymentSelection onPaymentMethodChange={setPaymentMethod} />

        <FinalButton disabled={!paymentMethod} onPress={submitPayment} text="CONFIRM PAYMENT" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  }
});
