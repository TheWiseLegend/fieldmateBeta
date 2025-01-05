import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '../components/ui/radio';
import { CircleIcon, Icon } from '../components/ui/icon';
import { VStack } from '../components/ui/vstack';
import { QrCode, Banknote } from 'lucide-react-native';

/**
 * @param {object} props
 */
export default function Payment({}) {
  const [values, setValues] = React.useState('Eng');
  const [price, setPrice] = React.useState(0);
  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>Payment Method</Text>

        <RadioGroup value={values} onChange={setValues} style={{ paddingTop: 20 }}>
          <VStack space="sm">
            <Radio value="Cash" style={style.card}>
              <View style={[style.flexRow, { width: '100%' }]}>
                <View style={[style.flexRow, { width: '40%' }]}>
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Cash (On Site)</RadioLabel>
                </View>

                <View>
                  <Icon size={32} as={Banknote}></Icon>
                </View>
              </View>
            </Radio>
            <Radio value="QR" style={style.card}>
              <View style={[style.flexRow, { width: '100%' }]}>
                <View style={[style.flexRow, { width: '16%' }]}>
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>

                  <RadioLabel>QR</RadioLabel>
                </View>

                <View>
                  <Icon size={32} as={QrCode}></Icon>
                </View>
              </View>
            </Radio>
          </VStack>
        </RadioGroup>

        <View style={[style.card2]}>
          <View>
            <Text style={style.cardTitle}>Order Details</Text>
          </View>

          <View style={[style.flexRow, { width: '99%' }]}>
            <Text style={style.grayText}>Subtotal</Text>
            <Text style={style.priceText}>RM {price}</Text>
          </View>
        </View>

        <View style={[style.flexRow, { width: '95%', marginTop: 30 }]}>
          <Text style={style.cancelText}>CANCELLATION POLICY</Text>
          <Text style={style.timeText}>Up To 24 Hours</Text>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#595959'
  },
  container: {
    padding: 20,
    paddingTop: 40
  },
  card: {
    elevation: 5,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '95%',
    height: 59,
    marginBottom: 7,
    borderWidth: 1, // Added line
    borderColor: '#BABABA' // Added line
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card2: {
    elevation: 5,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '95%',
    height: 110,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1, // Added line
    borderColor: '#BABABA' // Added line
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 10
  },
  grayText: {
    color: '#8E99AF'
  },
  priceText: {
    color: '#21293A',
    fontWeight: 'bold'
  },
  cancelText: {
    color: '#007AFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  timeText: {
    color: '#F30A0AD4',
    fontWeight: 'bold'
  }
});
