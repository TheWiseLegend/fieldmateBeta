import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BookPaymentInfo() {
  const [stadiumName, setStadiumName] = React.useState("Stadium Name");
  const [date, setDate] = React.useState("09 December 2024");
  const [time, setTime] = React.useState("8:00 pm - 9:00 pm");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{stadiumName}</Text>
        <View style={styles.textGrid}>
          <View style={styles.gridItem}>
            <Text style={[styles.centerText, styles.marginBottom, styles.grayText ]}>Booking Date</Text>
            <Text style={[styles.centerText, styles.boldText]}>{date}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={[styles.centerText, styles.marginBottom, styles.grayText ] }>Booking Time</Text>
            <Text style={[styles.centerText, styles.boldText]}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  textGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '38%', // Adjust width to fit two items per row
  },
  centerText: {
    textAlign: 'center',
  },
  marginBottom: {
    marginBottom: 10,
  },
  boldText:{
    fontWeight: 'bold',
  },
  grayText: {
    color: '#777777',
  },
});

export default BookPaymentInfo;
