import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
const BASE_URL = 'http://13.229.202.42:5000/api';

/**
 * @param {object} props
 * @param {string} props.stadiumName
 * @param {string} props.date
 * @param {string} props.time
 * @param {string} props.status
 * @param {string} props.bookingId
 * @param {function} props.onStatusChange
 */
export default function VendorConfirmCard({ stadiumName, date, time, status, bookingId, onStatusChange }) {
  const updateBookingStatus = async (newStatus) => {
    console.log(bookingId)
    try {
      await axios.put(`${BASE_URL}/bookings/${bookingId}`, { status: newStatus });
      Alert.alert('Success', `Booking status updated to ${newStatus}`);
      onStatusChange(bookingId, newStatus);
    } catch (error) {
      console.error('Error updating booking status:', error);
      Alert.alert('Error', 'Failed to update booking status');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.nabil}>
          <Text style={styles.title}>{stadiumName}</Text>
          <Text style={styles.title2}>Status: {status}</Text>
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
        <TouchableOpacity
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
        </TouchableOpacity>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons together
    alignItems: 'center',
    marginTop: 20, // Add space between the buttons and the card
    gap: 15 // Add consistent gap between buttons
  },
  confirmButton: {
    backgroundColor: 'green', // Set the background color to green
    width: 140, // Fixed width for a larger button
    height: 60, // Slightly larger height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 12 // Larger border radius for better appearance
  },
  declineButton: {
    backgroundColor: 'red', // Set the background color to red
    width: 140, // Fixed width for a larger button
    height: 60, // Slightly larger height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 12 // Larger border radius for better appearance
  },
  buttonText: {
    color: '#fff', // Set the text color to white
    textAlign: 'center', // Center the text
    fontWeight: 'bold',
    fontSize: 18 // Larger font size for better readability
  }
});