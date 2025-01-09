import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VendorConfirmCard from '../components/VendorConfirmCard.jsx';
import Header from '../components/Header.jsx';
import { DBContext } from '../db.js';
import dayjs from 'dayjs';

export default function VendorDashboard() {
  const [bookings, setBookings] = useState([]);
  const db = useContext(DBContext);

  useEffect(() => {
    const fArr = db.fields.reduce((acc, f) => {
      acc[f.field_id] = f;
      return acc;
    }, {});

    const bArr = db.bookings.filter((b) => {
      b['field'] = fArr[b.field_id];
      b['user'] = db.view.user;

      return true;
    });

    setBookings(bArr);
  }, []);

  /**
   * @param {string} bookingId
   * @param {string} newStatus
   */
  function handleStatusChange(bookingId, newStatus) {
    setBookings((prev) => prev.map((b) => (b.booking_id === bookingId ? { ...b, status: newStatus } : b)));
  }

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
              booking={b}
              date={formattedDate}
              time={formattedTime}
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
