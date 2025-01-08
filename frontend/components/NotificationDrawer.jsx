import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody } from './ui/drawer';

/**
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 */
export default function NotificationDrawer({ isOpen, onClose }) {
  const notifications = [
    { id: 1, title: 'Match Reminder', message: 'Your match is scheduled for tomorrow at 5 PM.' },
    { id: 2, title: 'New Message', message: 'You have received a new message from John.' },
    { id: 3, title: 'Event Update', message: 'The event location has been changed to Central Park.' }
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="lg" anchor="right">
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader style={styles.header}>
          <Text style={styles.headerText}>Notifications</Text>
        </DrawerHeader>
        <DrawerBody contentContainerStyle={styles.body}>
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  body: {
    padding: 20
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555'
  }
});
