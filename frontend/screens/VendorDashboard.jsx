import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VendorConfirmCard from '../components/VendorConfirmCard';
import Header from '../components/Header';
import axios from 'axios';
import { getData } from '../storage';
import dayjs from 'dayjs';
const BASE_URL = 'http://13.229.202.42:5000/api';

export default function VendorDashboard() {
  const [bookings, setBookings] = useState([]);
  const json = getData('client_user');

  const fetchData = useCallback(async () => {
    try {
      const user = JSON.parse(await json);

      const [bRes, fRes] = await Promise.all([axios.get(`${BASE_URL}/bookings`), axios.get(`${BASE_URL}/fields`)]);

      let bData = bRes.data;
      let fData = fRes.data;

      fData = fData.reduce((acc, f) => {
        acc[f.field_id] = f;
        return acc;
      }, {});
      bData = bData.filter((b) => {
        // if (b.vendor_id !== user.user_id) return false;

        b['field'] = fData[b.field_id];
        b['user'] = user;

        return true;
      });

      setBookings(bData);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }, [json]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.booking_id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {bookings.map((b) => {
          const startDatetime = dayjs(b.start_datetime);
          const duration = b.duration;
          const formattedDate = startDatetime.format('DD MMMM YYYY');
          const endDatetime = startDatetime.add(duration, 'minute');
          const formattedTime = `${startDatetime.format('h:mm A')} - ${endDatetime.format('h:mm A')}`;

          return (
            <VendorConfirmCard
              key={b.booking_id}
              stadiumName={b.field.field_name}
              date={formattedDate}
              time={formattedTime}
              status={b.status}
              // @ts-ignore
              bookingId={b.booking_id}
              onStatusChange={handleStatusChange}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  }
});
