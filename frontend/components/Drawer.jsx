/** @import { MyNavigationProp, Navigations } from '../types.js' */
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, ButtonText } from './ui/button';
import { Heading } from './ui/heading';
import { Avatar, AvatarImage } from './ui/avatar';
import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from './ui/drawer';
import { useNavigation } from '@react-navigation/native';
import { DBContext, setData } from '../db.js';

/**
 * @param {object} props
 * @param {object} props.isOpen
 * @param {Function} props.onClose
 */
export default function ProfileDrawer({ isOpen, onClose }) {
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const db = useContext(DBContext);

  if (!db.view.user) {
    navigation.navigate('Login');
    return null;
  }

  /**
   * @param {string} section
   */
  function handleItemPress(section) {
    if (section === 'Edit Account') {
      navigation.navigate('Profile');
      onClose();
    }
  }

  async function handleLogout() {
    await setData('client_user', undefined);
    db.update('user', undefined);
    navigation.navigate('Login');
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md" anchor="left">
      <DrawerBackdrop />

      <DrawerContent>
        {db.view.user ? (
          <>
            <DrawerHeader style={styles.header}>
              <View>
                <Avatar size="xl" style={styles.avatar}>
                  <AvatarImage
                    source={{
                      uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg'
                    }}
                  />
                </Avatar>

                <Heading size="3xl" style={styles.userName}>
                  {db.view.user.name || 'USER NAME'}
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
            {[
              ['Login', 'Login'],
              ['Sign Up', 'Registration']
            ].map((/** @type {[string, Navigations]} */ [text, route], i) => (
              <Button
                key={i}
                onPress={() => {
                  navigation.navigate(route);
                  onClose();
                }}
                style={styles.authButton}
              >
                <ButtonText>{text}</ButtonText>
              </Button>
            ))}
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
