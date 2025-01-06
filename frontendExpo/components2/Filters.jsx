import React from 'react';
import { MapPin, ChevronDown, SortDescIcon } from 'lucide-react-native';
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
  SelectItem
} from '../components/ui/select';

export default function Filters() {
  return (
    <View style={[styles.container, styles.filters]}>
      <Select>
        <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
          <SelectIcon size={25} as={MapPin} />
          <SelectInput placeholder="State" value="-" />
          <SelectIcon size={25} as={ChevronDown} style={styles.chevronIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Selangor" value="sel" />
            <SelectItem label="Kuala Lumpur" value="kl" />
            <SelectItem label="Sabah" value="sab" />
            <SelectItem label="Serawak" value="ser" />
            <SelectItem label="Terengannu" value="ter" />
          </SelectContent>
        </SelectPortal>
      </Select>

      <Select>
        <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
          <SelectIcon size={25} as={SortDescIcon} />
          <SelectInput placeholder="Sort" value="-" />
          <SelectIcon size={25} as={ChevronDown} style={styles.chevronIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Lowest Price" value="lp" />
            <SelectItem label="Good Rating" value="gr" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

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
  },
  filters: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 1
  }
});
