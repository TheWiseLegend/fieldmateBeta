/** @import { ActivityTabs, Booking, Field, MyNavigationProp } from '../types.js' */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonText } from '../components/ui/button';
import Header from '../components/Header.jsx';
import axios from 'axios';
import { getData } from '../storage';
import ActivityCard from '../components/ActivityCard';

const BASE_URL = 'http://13.229.202.42:5000/api';

export default function Activity() {
  /** @type {[ActivityTabs, React.Dispatch<React.SetStateAction<ActivityTabs>>]} */
  const [activeTab, setActiveTab] = useState('upcoming');
  /** @type {[Record<ActivityTabs, Booking[]>, React.Dispatch<React.SetStateAction<Record<ActivityTabs, Booking[]>>>]} */
  const [activities, setActivities] = useState({ upcoming: [], past: [] });
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  const json = getData('client_user');
  if (!json) {
    navigation.navigate('Login');
    return null;
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const user = JSON.parse(await json);

      const [bRes, fRes] = await Promise.all([axios.get(`${BASE_URL}/bookings`), axios.get(`${BASE_URL}/fields`)]);

      /** @type {Booking[]} */
      let bData = bRes.data;
      /** @type {Field[]} */
      let fData = fRes.data;

      // @ts-expect-error
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
        // @ts-expect-error
        booking.start_datetime = new Date(booking.start_datetime).getTime();
        // @ts-expect-error
        if (booking.start_datetime > now) upcoming.push(booking);
        else past.push(booking);
      }

      setActivities({ upcoming, past });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

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
          size="md" // @ts-expect-error
          variant={activeTab === 'past' ? 'solid' : 'outline'}
          action="primary"
          onPress={() => setActiveTab('past')}
          style={styles.tabButton}
        >
          <ButtonText style={styles.buttonText}>Past</ButtonText>
        </Button>
      </View>

      {activities[activeTab].length === 0 ? (
        <ActivityCard></ActivityCard>
      ) : (
        <ScrollView>
          {activities[activeTab].map((b) => (
            <View key={b.booking_id}>
              {/* @ts-expect-error */}
              <Text style={styles.contentText}>{b.field.field_name}</Text>
              <Text style={styles.contentText}>{new Date(b.start_datetime).toString()}</Text>
              <Text style={styles.contentText}>{b.duration}</Text>
            </View>
          ))}
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
