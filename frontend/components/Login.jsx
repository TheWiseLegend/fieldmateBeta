/** @import { MyNavigationProp } from './Footer.jsx' */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import { FormControl } from './ui/form-control';
import { VStack } from './ui/vstack';
import { Heading } from './ui/heading';
import { Button } from './ui/button';
import { ButtonText } from './ui/button';
import { EyeIcon, EyeOffIcon } from './ui/icon';
import { Input, InputField, InputSlot, InputIcon } from './ui/input';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const IP_ADDRESS = 'http://13.229.202.42:5000/api';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /** @type {MyNavigationProp} */
  const navigation = useNavigation();

  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  const handleLogin = async () => {
    try {
      /** @type {object[]} */
      const users = (await axios.get(`${IP_ADDRESS}/users`)).data;

      if (!users.find((u) => u.email === email && u.password === password)) {
        Alert.alert('Error: Invalid email or password');
        return;
      }

      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/icon.png')} style={styles.logo} /> */}
      <FormControl style={styles.formControl}>
        <VStack space="xl">
          <Heading className="text-typography-900">Login</Heading>
          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={email} onChangeText={setEmail} />
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
          <Button style={styles.button} onPress={handleLogin}>
            <ButtonText style={styles.buttonText}>Login</ButtonText>
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
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
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});
