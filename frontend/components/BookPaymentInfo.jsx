import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DBContext } from '../db.js';
import dayjs from 'dayjs';

/**
 * @param {object} props
 */
export default function BookPaymentInfo({}) {
  const [date, setDate] = useState('09 December 2024');
  const [time, setTime] = useState('8:00 pm - 9:00 pm');
  const db = useContext(DBContext);

  if (!db.view.field) return <Text>No field to view</Text>;

  useEffect(() => {
    async function fetchData() {
      try {
        const { time, duration } = db.view.booking;
        const startDatetime = dayjs(time);

        // Format date
        const formattedDate = startDatetime.format('DD MMMM YYYY');
        setDate(formattedDate);

        // Format time
        const endDatetime = startDatetime.add(duration, 'minute');
        const formattedTime = `${startDatetime.format('h:mm A')} - ${endDatetime.format('h:mm A')}`;
        setTime(formattedTime);
      } catch (error) {
        console.error('Error fetching field data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{db.view.field.field_name}</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
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
    textAlign: 'center',
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
  }
});
