/** @import { FullBooking, MyNavigationProp } from '../types.js' */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonText } from '../components/ui/button';
import Header from '../components/Header.jsx';
import ActivityCard from '../components/ActivityCard';
import { DBContext } from '../db.js';

export default function Activity() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activities, setActivities] = useState({ upcoming: [], past: [] });
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const db = useContext(DBContext);

  if (!db.view.user) {
    navigation.navigate('Login');
    return null;
  }

  useEffect(() => {
    const fields = db.fields.reduce((acc, f) => {
      acc[f.field_id] = f;
      return acc;
    }, {});

    /** @type {FullBooking[]} */ // @ts-expect-error
    const bookings = db.bookings.filter((b) => {
      if (b.user_id !== db.view.user.user_id) return false;

      b['field'] = fields[b.field_id];
      b['user'] = db.view.user;

      return true;
    });

    const now = Date.now();
    const upcoming = [];
    const past = [];
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];

      const time = new Date(booking.start_datetime).getTime();
      if (time > now) upcoming.push(booking);
      else past.push(booking);
    }

    setActivities({ upcoming, past });
  }, []);

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
          {activities[activeTab].map((b) => (
            <ActivityCard key={b.booking_id} booking={b} />
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
