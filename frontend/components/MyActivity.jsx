import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from '../components/ui/button';

export default function MyActivity() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const renderContent = () => {
    if (activeTab === 'upcoming') {
      return <Text style={styles.contentText}>Upcoming Activities Content</Text>;
    } else {
      return <Text style={styles.contentText}>Past Activities Content</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Button
          size="md"
          variant={activeTab === 'upcoming' ? 'solid' : 'outline'}
          action="primary"
          onPress={() => setActiveTab('upcoming')}
          style={styles.tabButton}
        >
          <ButtonText style={styles.buttonText}>Upcoming</ButtonText>
        </Button>
        <Button
          size="md"
          variant={activeTab === 'past' ? 'solid' : 'outline'}
          action="primary"
          onPress={() => setActiveTab('past')}
          style={styles.tabButton}
        >
          <ButtonText style={styles.buttonText}>Past</ButtonText>
        </Button>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    marginTop: 120 // Add margin to move the tabs down
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 5
  },
  buttonText: {
    fontSize: 16, // Adjust font size if needed
    textAlign: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentText: {
    fontSize: 18,
    color: '#333'
  }
});
