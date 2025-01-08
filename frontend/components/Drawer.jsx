/** @import { MyNavigationProp, User } from '../types.js' */
// @ts-ignore
import React, {useEffect, useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, ButtonText } from './ui/button';
import { Heading } from './ui/heading';
import { Text } from './ui/text';
import { Avatar, AvatarImage } from './ui/avatar';
import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from './ui/drawer';
import { useNavigation } from '@react-navigation/native';
import { getData, removeData } from '../storage';


/**
 * @param {object} props
 * @param {object} props.isOpen
 * @param {Function} props.onClose
 */
export default function ProfilDrawer({ isOpen, onClose }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if(user){

        const json = await getData('client_user');
        if (json === null) {
          navigation.navigate('Login');
          return;
        }

        try {
          const userData = JSON.parse(json);
          console.log('userData', userData);
          setUser(userData);
        } catch {
          console.log('Error parsing user data');
        }
      }
    }

    fetchUserData();
  }, [user]);


  /**
   * @param {string} section
   */
  function handleItemPress(section) {
    if (section === 'Edit Account') {
      navigation.navigate('Profile');
      onClose();
    }
  }

  function handleLogout() {
    removeData('client_user');
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md" anchor="left">
      <DrawerBackdrop />
      <DrawerContent>
        {user ? (
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
                  {user.name || 'USER NAME'}
                </Heading>
              </View>
            </DrawerHeader>
            <DrawerBody contentContainerStyle={styles.body}>
              {['Edit Account'].map((section, i) => (
                <TouchableOpacity key={i} onPress={() => handleItemPress(section)} style={styles.section}>
                  <Heading size="md" className="text-typography-800">
                    {section}
                  </Heading>
                </TouchableOpacity>
              ))}
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
    marginBottom: 20,
    marginLeft: 20
  },
  userName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 24
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  section: {
    marginVertical: 20,
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
