import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CalendarMinus2, MapPin, Users } from 'lucide-react-native';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function LFGCard() {
  return (
    <View className="p-3">
      <View style={styles.cardContainer}>
        <Text style={styles.priceText}>30.00 RM</Text>
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
              <Text style={styles.nameText}>Name</Text>
            </View>
            <View style={styles.row}>
              <CalendarMinus2 style={styles.icon} size={20} />
              <Text style={styles.infoText}>20 Aug - 4 Sep</Text>
            </View>
            <View style={styles.row}>
              <MapPin style={styles.icon} size={20} />
              <Text style={styles.infoText}>Location</Text>
            </View>
            <View style={styles.row}>
              <Users style={styles.icon} size={20} />
              <Text style={styles.infoText}>Players px</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => alert('Join us clicked')}>
            <Text style={styles.buttonText}>Join us</Text>
          </TouchableOpacity>
        </View>
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
    position: 'relative' // Ensure the priceText and button can be positioned absolutely
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    position: 'absolute', // Position the priceText absolutely
    top: 16, // Adjust the top position as needed
    left: 260 // Adjust the right position as needed
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40 // Adjust to make space for the "30.00 RM"
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
    position: 'absolute', // Position the button absolutely
    bottom: 16, // Adjust the bottom position as needed
    right: 16 // Adjust the right position as needed
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
