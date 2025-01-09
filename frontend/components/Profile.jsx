/** @import { MyNavigationProp, User } from '../types.js' */
import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from './ui/heading';
import { Button, ButtonText } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';
import { DBContext, setData } from '../db.js';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

/**
 * @param {object} props
 */
export default function Profile({}) {
  /** @type {[User, React.Dispatch<React.SetStateAction<User>>]} */ // @ts-expect-error
  const [user, setUser] = useState({});
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();
  const db = useContext(DBContext);

  if (!db.view.user) {
    navigation.navigate('Login');
    return null;
  }

  async function handleSave() {
    try {
      await axios.put(
        `${BASE_URL}/users/${user.user_id}`,
        {
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone.replace(/(\+6|-|\s)/g, '')
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      await setData('client_user', user);
      db.update('user', user);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLogout() {
    await setData('client_user', undefined);
    db.update('user', undefined);
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
