/** @import { FullBooking } from '../types.js' */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

/**
 * @param {object} props
 * @param {FullBooking} props.booking
 */
export default function ActivityCard({ booking }) {
  const startDatetime = dayjs(booking.start_datetime);
  const formattedDate = startDatetime.format('DD MMMM YYYY');
  const endDatetime = startDatetime.add(booking.duration, 'minute');
  const formattedTime = `${startDatetime.format('h:mm A')} - ${endDatetime.format('h:mm A')}`;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.nabil}>
          <Text style={styles.title}>{booking.field.field_name}</Text>
          <Text style={styles.title2}>Status: {booking.status}</Text>
        </View>

        <View style={styles.textGrid}>
          {[
            ['Booking Date', formattedDate],
            ['Booking Time', formattedTime]
          ].map(([label, value]) => (
            <View style={styles.gridItem} key={label}>
              <Text style={[styles.centerText, styles.marginBottom, styles.grayText]}>{label}</Text>
              <Text style={[styles.centerText, styles.boldText]}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  nabil: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 290
  },
  card: {
    width: '95%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    marginTop: '10%',
    padding: 20,
    paddingTop: 40,
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '70%'
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10
  },
  textGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gridItem: {
    width: '38%' // Adjust width to fit two items per row
  },
  centerText: {
    textAlign: 'center'
  },
  marginBottom: {
    marginBottom: 10
  },
  boldText: {
    fontWeight: 'bold'
  },
  grayText: {
    color: '#777777'
  }
});
