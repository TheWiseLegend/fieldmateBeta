/** @import { FullBooking } from '../types.js' */
/** @import { StyleProp, ViewStyle } from 'react-native' */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

/**
 * @param {object} props
 * @param {FullBooking} props.booking
 * @param {string} props.date
 * @param {string} props.time
 * @param {function} props.onStatusChange
 */
export default function VendorConfirmCard({ booking, date, time, onStatusChange }) {
  /**
   * @param {string} newStatus
   */
  async function updateBookingStatus(newStatus) {
    try {
      await axios.put(`${BASE_URL}/bookings/${booking.booking_id}`, { status: newStatus });
      // Alert.alert('Success', `Booking status updated to ${newStatus}`);
      onStatusChange(booking.booking_id, newStatus);
    } catch (err) {
      // Alert.alert('Error', 'Failed to update booking status');
      console.error('Error updating booking status:', err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.nabil}>
          <Text style={styles.title}>{booking.field.field_name}</Text>
          <Text style={styles.title2}>Status: {booking.status}</Text>
        </View>

        <View style={styles.textGrid}>
          <View style={styles.gridItem}>
            <Text style={[styles.centerText, styles.marginBottom, styles.grayText]}>Booking Date</Text>
            <Text style={[styles.centerText, styles.boldText]}>{date}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={[styles.centerText, styles.marginBottom, styles.grayText]}>Booking Time</Text>
            <Text style={[styles.centerText, styles.boldText]}>{time}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {[
          ['confirmed', 'Confirm', styles.confirmButton],
          ['cancelled', 'Decline', styles.declineButton]
        ].map((val, i) => {
          /** @type {[string, string, StyleProp<ViewStyle>]} */ // @ts-expect-error
          const [status, name, styling] = val;
          return (
            <TouchableOpacity key={i} style={styling} activeOpacity={0.7} onPress={() => updateBookingStatus(status)}>
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          );
        })}

        {/* <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.7}
          onPress={() => updateBookingStatus('confirmed')}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.declineButton}
          activeOpacity={0.7}
          onPress={() => updateBookingStatus('cancelled')}
        >
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nabil: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 310
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
    marginBottom: 10
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
    width: '38%'
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 15
  },
  confirmButton: {
    backgroundColor: 'green',
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  declineButton: {
    backgroundColor: 'red',
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});
