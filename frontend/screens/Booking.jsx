import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { HStack } from '../components/ui/hstack';
import { Radio, RadioGroup, RadioIndicator, RadioLabel } from '../components/ui/radio';
import Header from '../components/Header.jsx';
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles.js';
import {Switch} from '../components/ui/switch';


export default function BookingSection() {
  const [date, setDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(false);
  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM',
    '9:00 PM', '10:00 PM', '11:00 PM'
  ];



  return (
    <View id="booking-screen" className="screen">
      <Header />

      <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        <View style={styles.titleParent}>
          <Text style={styles.title}>Book A Slot</Text>
        </View>
        <View style={styles.bookingDate}>
          <DateTimePicker
            mode="single"
            date={date}
            onChange={(newDate) => setDate(newDate.date)}
          />
        </View>

        <Text style={styles.subtitle}>Duration</Text>
        <RadioGroup style={styles.centerGroup} className='mb-6' value={selectedDuration} onChange={setSelectedDuration}>
          <HStack style={styles.durationTimes}>
            {['60 min', '120 min'].map((time) => (
              <Radio
                key={time}
                value={time}
                style={[styles.timeSlot, selectedDuration === time && styles.selectedTimeSlot]}
              >
                <RadioLabel style={styles.timeText}>{time}</RadioLabel>
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
        <Text style={styles.subtitle}>Booking Time</Text>
        <RadioGroup style={styles.bookingTimes} value={selectedTime} onChange={setSelectedTime}>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <HStack key={rowIndex} space="4xl" style={styles.row}>
                {timeSlots.slice(rowIndex * 3, rowIndex * 3 + 3).map((time) => (
                  <Radio
                    key={time}
                    value={time}
                    style={[styles.timeSlot, selectedTime === time && styles.selectedTimeSlot]}
                  >
                    <RadioLabel style={styles.timeText}>{time}</RadioLabel>
                  </Radio>
                ))}
              </HStack>
            ))}
          </RadioGroup>
      </View>

      <Text style={styles.text}>Do you want to create a match post?</Text>
      <HStack space='3xl' style={styles.centerMatch}>
        <Text style={styles.textsm}>Create a Match</Text>
        
        <Switch size="md" isDisabled={false} value={selectedMatch} onValueChange={setSelectedMatch}
        />
      
      </HStack>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  containerScroll: {
    paddingBottom: 300,
  },
  centerMatch:{
    alignItems: 'center',
    width: '100%',
  },
  durationTimes:{
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',

  },
  bookingTimes:{
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  centerGroup:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleParent: {
    left: 100,
    width: 198,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
  },
  title: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 35,
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '300',
    lineHeight: 35,
    marginLeft: 10,
  },
  textsm: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: '300',
    lineHeight: 35,
    marginLeft: 10,
  },
  bookingDate: {
    marginTop: 20,
  },
  timeSlot: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 45,
    

  },
  subtitle:{
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 35,
  },
  timeText: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  selectedTimeSlot: {
    borderColor: '#007BFF', // Highlight color for selected time slot
  },
  rectangle: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  row:{
    marginBottom: 10,
  }
});
