// @ts-ignore
import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VendorConfirmCard from '../components/VendorConfirmCard';
import Header from '../components/Header';
export default function VendorDashboard() {
  return (
    <View>
      <Header />
      <VendorConfirmCard />
    </View>
  );
}
