// @ts-ignore
import react from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import VendorConfirmCard from '../components/VendorConfirmCard';
import Header from '../components/Header';
export default function VendorDashboard() {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>

      <VendorConfirmCard />
      <VendorConfirmCard />
      <VendorConfirmCard />
      <VendorConfirmCard />
      <VendorConfirmCard />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
    paddingBottom: 100
  }
});
