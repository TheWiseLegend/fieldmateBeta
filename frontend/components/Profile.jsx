/** @import { MyNavigationProp, User } from '../types.js' */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from './ui/heading';
import { Button, ButtonText } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';

/**
 * @param {object} props
 */
export default function Profile({}) {
  /** @type {[User, React.Dispatch<React.SetStateAction<User>>]} */ // @ts-expect-error
  const [user, setUser] = useState({});
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  const json = localStorage.getItem('client_user');
  if (json === null) {
    navigation.navigate('Login');
    return null;
  }

  useEffect(() => {
    if (json !== null)
      try {
        setUser(JSON.parse(json));
      } catch {}
  }, []);

  function handleSave() {
    localStorage.setItem('client_user', JSON.stringify(user));
  }

  function handleLogout() {
    localStorage.removeItem('client_user');
    navigation.navigate('Login');
  }

  return (
    <View>
      <View style={styles.avatarContainer}>
        <Avatar size="xl">
          <AvatarImage
            source={{
              uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg'
            }}
          />
        </Avatar>
        <Heading size="3xl" style={styles.userName}>
          Edit Account
        </Heading>
      </View>

      <View style={styles.body}>
        {['name', 'email', 'phone'].map((key) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={user[key] || ''}
            onChangeText={(text) => setUser({ ...user, [key]: text })}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Button onPress={handleSave} className="flex-1" style={styles.saveButton}>
          <ButtonText>Save</ButtonText>
        </Button>
        <Button onPress={handleLogout} className="flex-1" style={styles.logoutButton}>
          <ButtonText>Log Out</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  avatarContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  body: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  footer: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButton: {
    width: '80%',
    justifyContent: 'center',
    marginBottom: 10
  },
  logoutButton: {
    width: '80%',
    justifyContent: 'center'
  }
});
