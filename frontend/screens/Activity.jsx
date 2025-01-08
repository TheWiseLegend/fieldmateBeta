import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Button, ButtonText } from '../components/ui/button';
import Header from '../components/Header.jsx';
import ActivityCard from '../components/ActivityCard';
import axios from 'axios';
import { getData } from '../storage';
import dayjs from 'dayjs';
const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Activity() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activities, setActivities] = useState({ upcoming: [], past: [] });
  const navigation = useNavigation();

  const json = getData('client_user');
  if (!json) {
    navigation.navigate('Login');
    return null;
  }

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
        if (b.user_id !== user.user_id) return false;

        b['field'] = fData[b.field_id];
        b['user'] = user;

        return true;
      });

      const now = Date.now();
      const upcoming = [];
      const past = [];
      for (let i = 0; i < bData.length; i++) {
        const booking = bData[i];
        booking.start_datetime = new Date(booking.start_datetime).getTime();
        if (booking.start_datetime > now) upcoming.push(booking);
        else past.push(booking);
      }

      setActivities({ upcoming, past });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }, [json]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return (
    <View id="activity-screen" className="screen" style={styles.container}>
      <Header />

      <View style={styles.tabContainer}>
        <Button
          size="md"
          variant={activeTab === 'upcoming' ? 'solid' : 'outline'}
          action="primary"
          onPress={() => setActiveTab('upcoming')}
          style={styles.tabButton}
        >
          <ButtonText style={styles.buttonText}>Upcoming</ButtonText>
        </Button>
        <Button
          size="md"
          variant={activeTab === 'past' ? 'solid' : 'outline'}
          action="primary"
          onPress={() => setActiveTab('past')}
          style={styles.tabButton}
        >
          <ButtonText style={styles.buttonText}>Past</ButtonText>
        </Button>
      </View>

      {activities[activeTab].length === 0 ? (
        <Text style={styles.contentText}>No activities found</Text>
      ) : (
        <ScrollView>
          {activities[activeTab].map((b) => {
            const startDatetime = dayjs(b.start_datetime);
            const duration = b.duration;
            const formattedDate = startDatetime.format('DD MMMM YYYY');
            const endDatetime = startDatetime.add(duration, 'minute');
            const formattedTime = `${startDatetime.format('h:mm A')} - ${endDatetime.format('h:mm A')}`;

            return (
              <ActivityCard
                key={b.booking_id}
                stadiumName={b.field.field_name}
                date={formattedDate}
                time={formattedTime}
                status={b.status}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  tabContainer: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 5
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center'
  },
  contentContainer: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentText: {
    fontSize: 22,
    color: '#333'
  }
});
