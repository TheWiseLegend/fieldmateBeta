import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header.jsx';
import { Color, Border, FontSize, FontFamily } from '../GlobalStyles.js';
import BookPaymentInfo from '../components/BookPaymentInfo.jsx';
import PaymentSelection from '../components/PaymentSelection.jsx';
import FinalButton from '../components/FinalButton.jsx';
import { getData } from '../storage.js';
import axios from 'axios';
const BASE_URL = 'http://13.229.202.42:5000/api';
import { useNavigation } from '@react-navigation/native';

export default function PaymentSection() {
  const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  async function submitPayment() {
    const user = await getData('client_user');
    const user_id = JSON.parse(user).user_id;

    const field = await getData('field_view');
    const field_id = JSON.parse(field).field_id;

    const date = await getData('booking_time');
    const dur = await getData('booking_duration');
    const start_datetime = JSON.parse(date);
    const duration = JSON.parse(dur);
    console.log('start_datetime:', start_datetime);
    console.log('duration:', duration);

    const Booking = {
      user_id,
      field_id,
      start_datetime,
      duration,
      current_players: 0
    };

    try {
      await axios.post(`${BASE_URL}/bookings`, Booking, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Booking successful!');
      navigation.navigate('Stadiums');
    } catch (err) {
      console.error('Error creating booking:', err.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <BookPaymentInfo />
      <PaymentSelection onPaymentMethodChange={setSelectedPaymentMethod} />
      <FinalButton
        disabled={!selectedPaymentMethod}
        onPress={submitPayment}
        text="CONFIRM PAYMENT"
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Add your styles here
  container: {
    paddingBottom: 20
  },
});
