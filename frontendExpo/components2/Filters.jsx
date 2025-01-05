import React from 'react';
import { MapPin, ChevronDown, Filter } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Box
} from '@/components/ui/select';

export default function Filters() {
  return (
    <>
      <View style={styles.container}>
        <Select>
          <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
            <SelectIcon size={25} as={MapPin} />
            <SelectInput placeholder="Select State" />
            <SelectIcon size={25} as={ChevronDown} style={styles.chevronIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Selangor" value="Selangor" />
              <SelectItem label="KL" value="Kuala Lumpur" />
              <SelectItem label="Sabah" value="Sabah" />
              <SelectItem label="Serawak" value="Serawak" isDisabled={true} />
              <SelectItem label="Terengannu" value="Terengannu" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Select>
          <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
            <SelectIcon size={25} as={Filter} />
            <SelectInput placeholder="Select Filter" />
            <SelectIcon size={25} as={ChevronDown} style={styles.chevronIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem label="Cross Platform Development Process" value="Cross Platform Development Process" />
              <SelectItem label="UI Designing" value="ui" isDisabled={true} />
              <SelectItem label="Backend Development" value="backend" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginLeft: 25, // Adjust the value to move the component to the right
//     marginTop: 100 // Adjust the value to move the component down
//   },
//   filterComp: {
//     marginLeft: -100 // Adjust the value to move the component to the left
//   },
//   locationLogo: {
//     marginLeft: 15 // Adjust the value to move the component to the right
//   },
//   selectTrigger: {
//     width: 175 // Adjust the width as needed
//   },
//   chevronIcon: {
//     marginLeft: -65
//   }
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-around', // Distribute space evenly around the components
    marginLeft: 10, // Adjust the value to move the component to the right
    marginTop: 110 // Adjust the value to move the component down
  },
  selectTrigger: {
    width: 160, // Adjust the width as needed
    height: 40 // Adjust the height as needed
  }
});
