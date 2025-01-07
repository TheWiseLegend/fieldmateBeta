/** @import { MyNavigationProp } from './Footer.jsx' */
/** @import { User } from './Login.jsx' */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormControl } from './ui/form-control';
import { VStack } from './ui/vstack';
import { Heading } from './ui/heading';
import { Button } from './ui/button';
import { ButtonText } from './ui/button';
import { EyeIcon, EyeOffIcon } from './ui/icon';
import { Input, InputField, InputSlot, InputIcon } from './ui/input';
import axios from 'axios';

const BASE_URL = 'http://13.229.202.42:5000/api';

/**
 * @param {object} props
 */
export default function Registration({}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  function handleState() {
    setShowPassword((prev) => !prev);
  }

  async function handleRegister() {
    if (!name || !email || !password || !password2) {
      Alert.alert('Error: name, email, and password fields are required');
      console.error('Error: name, email, and password fields are required');
      return;
    }

    if (password !== password2) {
      Alert.alert('Error: Passwords do not match');
      console.error('Error: Passwords do not match');
      return;
    }

    /** @type {Omit<User, 'user_id' | 'created_at' | 'updated_at'>} */
    const user = {
      name,
      email,
      password,
      phone: phone || undefined,
      user_role: 'player'
    };

    try {
      await axios.post(`${BASE_URL}/users`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      localStorage.setItem('client_user', JSON.stringify(user));
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  }

  return (
    <View style={styles.container}>
      <FormControl style={styles.formControl}>
        <VStack space="xl">
          <Heading className="text-typography-900">Sign Up</Heading>

          <VStack space="xs">
            <Text className="text-typography-500">Name</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={name} onChangeText={setName} />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={email} onChangeText={setEmail} />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Phone Number</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={phone} onChangeText={setPhone} />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type={showPassword ? 'text' : 'password'} value={password} onChangeText={setPassword} />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Confirm Password</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type={showPassword ? 'text' : 'password'} value={password2} onChangeText={setPassword2} />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <Button style={styles.button} onPress={handleRegister}>
            <ButtonText style={styles.buttonText}>Sign Up</ButtonText>
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </VStack>
      </FormControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  formControl: {
    padding: 16,
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor: '#ccc',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400
  },
  input: {
    minWidth: 250
  },
  button: {
    marginTop: 16
  },
  buttonText: {
    color: '#fff'
  },
  linkText: {
    color: '#007BFF',
    marginTop: 16,
    textAlign: 'center'
  }
});
