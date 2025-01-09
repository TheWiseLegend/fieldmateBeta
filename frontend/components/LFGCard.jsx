/** @import { LFGData } from '../types.js' */
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CalendarMinus2, MapPin, Users } from 'lucide-react-native';
import { Avatar, AvatarImage } from './ui/avatar';
import { DBContext } from '../db.js';

/**
 * @param {object} props
 * @param {object} props.data
 */
export default function LFGCard({ data }) {
  /** @type {[LFGData, React.Dispatch<React.SetStateAction<LFGData>>]} */
  const [lfgData, setLfgData] = useState({
    name: 'User123',
    address: 'Malaysia',
    price: 999,
    duration: 0,
    player_count: 0,
    start_datetime: new Date()
  });
  const db = useContext(DBContext);

  useEffect(() => {
    fetchData();
  }, [data]);

  async function fetchData() {
    try {
      const booking = db.bookings.find((b) => b.lfg_id === data.lfg_id);
      const field = db.fields.find((f) => f.field_id == booking.field_id);
      const user = db.users.find((u) => u.user_id == booking.user_id);

      setLfgData({
        name: user.name,
        address: field.address,
        price: field.price,
        duration: booking.duration,
        player_count: booking.current_players,
        start_datetime: new Date(booking.start_datetime)
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  return (
    <View className="p-3" style={styles.cardContainer}>
      <Text style={styles.priceText}>{lfgData.price} RM</Text>
      <View style={styles.contentContainer}>
        <View style={styles.leftSection}>
          <View style={styles.row}>
            <Avatar size="md" style={styles.avatar}>
              <AvatarImage
                source={{
                  uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg'
                }}
              />
            </Avatar>
            <Text style={styles.nameText}>{lfgData.name}</Text>
          </View>

          <View style={styles.row}>
            <CalendarMinus2 style={styles.icon} size={20} />
            <Text style={styles.infoText}>{lfgData.start_datetime?.toLocaleString()}</Text>
          </View>

          <View style={styles.row}>
            <MapPin style={styles.icon} size={20} />
            <Text style={styles.infoText}>{lfgData.address}</Text>
          </View>

          <View style={styles.row}>
            <Users style={styles.icon} size={20} />
            <Text style={styles.infoText}>{lfgData.player_count} players</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => alert('Join us clicked')}>
          <Text style={styles.buttonText}>Join us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    position: 'relative'
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    position: 'absolute',
    top: 16,
    left: 260
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40
  },
  leftSection: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  avatar: {
    marginRight: 8
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  icon: {
    marginRight: 8,
    color: '#666'
  },
  infoText: {
    fontSize: 14,
    color: '#666'
  },
  button: {
    backgroundColor: '#6c63ff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 16,
    right: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
