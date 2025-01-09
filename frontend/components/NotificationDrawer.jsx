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
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D1C4E9',
    backgroundColor: '#673AB7'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  body: {
    padding: 20,
    backgroundColor: '#EDE7F6'
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#D1C4E9',
    borderWidth: 1
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#673AB7',
    marginBottom: 5
  },
  notificationMessage: {
    fontSize: 16,
    color: '#757575'
  }
});
