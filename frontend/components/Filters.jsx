import React, { useEffect, useState } from 'react';
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
} from './ui/select';

/** @type {[string, string][]} */
const states = [
  ['Kuala Lumpur', 'kuala lumpur'],
  ['Selangor', 'selangor'],
  ['Johor', 'johor'],
  ['Sabah', 'sabah'],
  ['Serawak', 'serawak'],
  ['Terengannu', 'terengannu']
];

/** @type {[string, string][]} */
const sorts = [
  ['Highest Price', '+price'],
  ['Lowest Price', '-price']
];

/**
 * @param {object} props
 * @param {[string, string][]} [props.extraStates]
 * @param {[string, string][]} [props.extraSorts]
 * @param {Function} props.onStateChange
 * @param {Function} props.onSortChange
 */
export default function Filters({ extraStates, extraSorts, onStateChange, onSortChange }) {
  const [state, setState] = useState('State');
  const [sort, setSort] = useState('Sort');

  if (extraStates && !states.includes(extraStates[0])) states.push(...(extraStates || []));
  if (extraSorts && !sorts.includes(extraSorts[0])) sorts.push(...(extraSorts || []));

  useEffect(() => {
    onStateChange(state);
  }, [state]);

  useEffect(() => {
    onSortChange(sort);
  }, [sort]);

  return (
    <View style={styles.container}>
      <Select placeholder="State" selectedValue={state} onValueChange={(value) => setState(value)}>
        <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
          <SelectIcon size="xl" as={MapPin} />
          <SelectInput placeholder="State" />
          <SelectIcon size="xl" as={ChevronDown} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {states.map(([label, value]) => (
              <SelectItem key={value} label={label} value={value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>

      <Select placeholder="Sort" selectedValue={sort} onValueChange={(value) => setSort(value)}>
        <SelectTrigger variant="rounded" size="sm" style={styles.selectTrigger} className="px-3">
          <SelectIcon size="xl" as={SortDescIcon} />
          <SelectInput placeholder="Sort" />
          <SelectIcon size="xl" as={ChevronDown} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {sorts.map(([label, value]) => (
              <SelectItem key={value} label={label} value={value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  selectTrigger: {
    width: 160,
    height: 40
  }
});
