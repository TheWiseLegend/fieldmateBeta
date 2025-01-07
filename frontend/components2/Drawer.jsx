import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonText } from '../components/ui/button';
import { Heading } from '../components/ui/heading';
import { Text } from '../components/ui/text';
import { Avatar, AvatarImage } from '../components/ui/avatar';
import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '../components/ui/drawer';
import { useNavigation } from '@react-navigation/native';

/**
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {boolean} props.isLoggedIn
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsLoggedIn
 */

export default function ProfileDrawer({ isOpen, onClose, isLoggedIn, setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md" anchor="left">
      <DrawerBackdrop />
      <DrawerContent>
        {isLoggedIn ? (
          <>
            <DrawerHeader style={styles.header}>
              <View style={styles.avatarContainer}>
                <Avatar size="xl" style={styles.avatar}>
                  <AvatarImage
                    source={{
                      uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg'
                    }}
                  />
                </Avatar>
                <Heading size="3xl" style={styles.userName}>
                  User Name
                </Heading>
              </View>
            </DrawerHeader>
            <DrawerBody contentContainerStyle={styles.body}>
              <Text size="2x2" className="text-typography-800" style={styles.section}>
                Edit Account
              </Text>
              <Text size="2x2" className="text-typography-800" style={styles.section}>
                Settings
              </Text>
              <Text size="2x2" className="text-typography-800" style={styles.section}>
                Privacy
              </Text>
              <Text size="2x2" className="text-typography-800" style={styles.section}>
                Help
              </Text>
            </DrawerBody>
            <DrawerFooter style={styles.footer}>
              <Button onPress={handleLogout} className="flex-1" style={styles.logoutButton}>
                <ButtonText>Log Out</ButtonText>
              </Button>
            </DrawerFooter>
          </>
        ) : (
          <DrawerBody contentContainerStyle={styles.body}>
            <Button
              onPress={() => {
                navigation.navigate('Login');
                onClose();
              }}
              style={styles.authButton}
            >
              <ButtonText>Login</ButtonText>
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('Registration');
                onClose();
              }}
              style={styles.authButton}
            >
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginBottom: 20, // Increase margin to add more space below the avatar
    marginLeft: 20 // Move the avatar a bit to the left
  },
  userName: {
    textAlign: 'center',
    marginTop: 20, // Increase margin to add more space above the user name
    fontSize: 24, // Increase font size to make the text larger
    fontWeight: 'bold' // Make the text bold for better visibility
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  section: {
    marginVertical: 20, // Adjust margin to add more spacing
    textAlign: 'center'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  logoutButton: {
    width: '100%',
    justifyContent: 'center'
  },
  authButton: {
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center'
  }
});
