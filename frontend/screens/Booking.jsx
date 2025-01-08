import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
// @ts-ignore
import { Image } from 'expo-image';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { HStack } from '../components/ui/hstack';
import { VStack } from '../components/ui/vstack';
import { Radio, RadioGroup, RadioLabel } from '../components/ui/radio';
import Header from '../components/Header.jsx';
// @ts-ignore
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles.js';
import { Switch } from '../components/ui/switch';
import FinalButton from '../components/FinalButton.jsx';
import { getData } from '../storage';
import axios from 'axios';
const BASE_URL = 'http://13.229.202.42:5000/api';


export default function BookingSection() {
  const [date, setDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('60 min');
  const [selectedMatch, setSelectedMatch] = useState(false);
  const [timeSlots, setTimeSlots] = useState([
    '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM',
    '9:00 PM', '10:00 PM', '11:00 PM'
  ]);

  useEffect(() => {
    if (selectedDuration === '120 min') {
      setTimeSlots([
        '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM',
        '6:00 PM - 8:00 PM', '8:00 PM - 10:00 PM', '10:00 PM - 12:00 AM'
      ]);
    } else {
      setTimeSlots([
        '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM',
        '6:00 PM', '7:00 PM', '8:00 PM',
        '9:00 PM', '10:00 PM', '11:00 PM'
      ]);
    }
  }, [selectedDuration]);
  async function handleSubmit() {
    if (!selectedTime || !selectedDuration) {
      alert('Please select a time and duration.');
      return;
    }
  
    let startTime;
    if (selectedTime.includes(' - ')) {
      [startTime] = selectedTime.split(' - ');
    } else {
      startTime = selectedTime;
    }
  
    // Ensure date is a valid dayjs object
    const parsedDate = dayjs(date);
    if (!parsedDate.isValid()) {
      alert('Invalid date.');
      return;
    }
  
    // Manually convert startTime to 24-hour format
    const [time, modifier] = startTime.split(' ');
    let [hours, minutes] = time.split(':');
    if (modifier === 'PM' && hours !== '12') {
      hours = String(parseInt(hours, 10) + 12);
    } else if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
  
    // @ts-ignore
    const formattedTime = `${hours}:${minutes}`;
  
    // Combine date and time
    const combinedDateTime = parsedDate
      .hour(parseInt(hours, 10))
      .minute(parseInt(minutes, 10))
      .second(0)
      .millisecond(0)
      .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      // @ts-ignore
      const duration = parseInt(selectedDuration.split(' ')[0], 10);
      // @ts-ignore
      const user = await getData('client_user');
      // @ts-ignore
      const user_id = JSON.parse(user).user_id;

      // @ts-ignore
      const field = await getData('field_view');
      const field_id = JSON.parse(field).field_id;
      console.log(typeof(combinedDateTime));
      // @ts-ignore
      const Booking = {
        user_id,
        field_id,
        start_datetime: combinedDateTime,
        duration,
        current_players: 0
      };

      try {
        await axios.post(`${BASE_URL}/bookings`, Booking, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        alert('Booking successful!');
      } catch (err) {
        // @ts-ignore
        console.error('Error creating booking:', err.message);
      }
  }

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
              // @ts-ignore
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
            {selectedDuration === '60 min' ? (
              Array.from({ length: Math.ceil(timeSlots.length / 3) }).map((_, rowIndex) => (
                <HStack key={rowIndex} space="lg" style={styles.row}>
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
              ))
            ) : (
              <VStack space="lg">
                {timeSlots.map((time, 
// @ts-ignore
                index) => (
                  <Radio
                    key={time}
                    value={time}
                    style={[styles.timeSlot, selectedTime === time && styles.selectedTimeSlot, styles.longTimeSlot]}
                  >
                    <RadioLabel style={styles.timeText}>{time}</RadioLabel>
                  </Radio>
                ))}
              </VStack>
            )}
          </RadioGroup>
        </View>

        <Text style={styles.text}>Do you want to create a match post?</Text>
        <HStack space='3xl' style={styles.centerMatch}>
          <Text style={styles.textsm}>Create a Match</Text>
          <Switch size="md" isDisabled={false} value={selectedMatch} onValueChange={setSelectedMatch} />
        </HStack>
        <FinalButton
          text="PROCEED TO PAYMENT"
          onPress={handleSubmit}
          disabled={!selectedTime || !selectedDuration}
        />
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
    paddingBottom: 150,
  },
  centerMatch: {
    alignItems: 'center',
    width: '100%',
  },
  durationTimes: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  bookingTimes: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  centerGroup: {
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
  longTimeSlot: {
    width: 200, // Adjust the width for 120 min slots
  },
  subtitle: {
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
  row: {
    marginBottom: 10,
  },
});
