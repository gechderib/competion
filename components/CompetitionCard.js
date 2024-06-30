import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

const CompetitionCard = ({ competition, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.card,
        (pressed || isPressed) && styles.cardPressed,
      ]}
    >
      <Text style={styles.title}>{competition.title}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{competition.startDate}</Text>
        <Text style={styles.dateSeparator}>~</Text>
        <Text style={styles.date}>{competition.endDate}</Text>
      </View>
      <Text style={styles.location}>Location: {competition.location}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#034efc',
  },
  cardPressed: {
    backgroundColor: '#0D47A1',
    transform: [{ scale: 0.95 }],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  date: {
    color: 'white',
  },
  dateSeparator: {
    color: 'white',
    paddingHorizontal: 4,
  },
  location: {
    color: '#BBDEFB',
  },
});

export default CompetitionCard;
