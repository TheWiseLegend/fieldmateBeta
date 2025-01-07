/** @import { MyNavigationProp, User } from '../types.js' */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from './ui/heading';
import { Button, ButtonText } from './ui/button';
import { Text } from './ui/text';
import { Avatar, AvatarImage } from './ui/avatar';
import { DrawerHeader, DrawerBody, DrawerFooter } from './ui/drawer';

/**
 * @param {object} props
 */
export default function Profile({}) {
  /** @type {[User, React.Dispatch<React.SetStateAction<User>>]} */ // @ts-expect-error
  const [user, setUser] = useState({});
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  useEffect(() => {
    const json = localStorage.getItem('client_user');

    if (json === null) {
      navigation.navigate('Login');
    }

    try {
      setUser(JSON.parse(json));
    } catch {}
  }, []);

  // /** @returns {boolean} */
  // function isSignedIn() {
  //   const json = localStorage.getItem('client_user');
  //   if (json === null) return false;
  // }

  function handleLogout() {
    localStorage.removeItem('client_user');
    navigation.navigate('Login');
  }

  return (
    <View>
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
            {user?.name || 'USER NAME'}
          </Heading>
        </View>
      </DrawerHeader>
      <DrawerBody contentContainerStyle={styles.body}>
        <Text size="md" className="text-typography-800" style={styles.section}>
          Edit Account
        </Text>
        <Text size="md" className="text-typography-800" style={styles.section}>
          Settings
        </Text>
        <Text size="md" className="text-typography-800" style={styles.section}>
          Privacy
        </Text>
        <Text size="md" className="text-typography-800" style={styles.section}>
          Help
        </Text>
      </DrawerBody>
      <DrawerFooter style={styles.footer}>
        <Button onPress={handleLogout} className="flex-1" style={styles.logoutButton}>
          <ButtonText>Log Out</ButtonText>
        </Button>
      </DrawerFooter>
    </View>
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
