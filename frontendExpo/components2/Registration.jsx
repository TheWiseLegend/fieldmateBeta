import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native';
import { FormControl } from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { Input, InputField, InputSlot, InputIcon } from '@/components/ui/input';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  formControl: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
  },
  input: {
    minWidth: 250,
  },
  button: {
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
  },
  linkText: {
    color: '#007BFF',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !phone) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, phone }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Success', 'Registration successful');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.message || 'Registration failed');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FormControl style={styles.formControl}>
        <VStack space="xl">
          <Heading className="text-typography-900">Sign Up</Heading>
          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={email} onChangeText={setEmail} required />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Phone Number</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type="text" value={phone} onChangeText={setPhone} required />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type={showPassword ? 'text' : 'password'} value={password} onChangeText={setPassword} required />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Confirm Password</Text>
            <Input style={styles.input} variant="rounded">
              <InputField type={showPassword ? 'text' : 'password'} value={confirmPassword} onChangeText={setConfirmPassword} required />
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
