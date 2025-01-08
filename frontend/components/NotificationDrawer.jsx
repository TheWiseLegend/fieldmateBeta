// @ts-ignore
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
    borderBottomColor: '#D1C4E9', // Light mauve color for the border
    backgroundColor: '#673AB7' // Purple background color for the header
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center' // Center horizontally
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the header text
    textAlign: 'center' // Center the text
  },
  body: {
    padding: 20,
    backgroundColor: '#EDE7F6' // Light mauve background color for the body
  },
  notificationCard: {
    backgroundColor: '#FFFFFF', // White background color for the notification card
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#D1C4E9', // Light mauve border color
    borderWidth: 1
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#673AB7', // Purple color for the notification title
    marginBottom: 5
  },
  notificationMessage: {
    fontSize: 16,
    color: '#757575' // Grey color for the notification message
  }
});
