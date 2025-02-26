import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface VacationDestination {
  id: number;
  location: string;
  price: number;
  average_yearly_temperature: string;
}

const VacationSelector = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>(
    []
  );

  const vacationDestinations: VacationDestination[] = [
    {
      id: 1,
      location: "Paris",
      price: 2500,
      average_yearly_temperature: "15°C",
    },
    {
      id: 2,
      location: "Tokyo",
      price: 1800,
      average_yearly_temperature: "16°C",
    },
    {
      id: 3,
      location: "New York City",
      price: 2200,
      average_yearly_temperature: "13°C",
    },
    {
      id: 4,
      location: "Sydney",
      price: 2700,
      average_yearly_temperature: "20°C",
    },
    {
      id: 5,
      location: "Cape Town",
      price: 1600,
      average_yearly_temperature: "18°C",
    },
    {
      id: 6,
      location: "Rio de Janeiro",
      price: 1900,
      average_yearly_temperature: "24°C",
    },
    {
      id: 7,
      location: "Barcelona",
      price: 2000,
      average_yearly_temperature: "17°C",
    },
    {
      id: 8,
      location: "Dubai",
      price: 3000,
      average_yearly_temperature: "27°C",
    },
    {
      id: 9,
      location: "Bali",
      price: 1500,
      average_yearly_temperature: "28°C",
    },
    {
      id: 10,
      location: "Rome",
      price: 2100,
      average_yearly_temperature: "18°C",
    },
  ];

  const toggleDestination = (id: number): void => {
    if (selectedDestinations.includes(id)) {
      setSelectedDestinations(
        selectedDestinations.filter((destId) => destId !== id)
      );
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacation Destinations</Text>
      <View>
        {vacationDestinations.map((destination: VacationDestination) => (
          <TouchableOpacity
            key={destination.id}
            onPress={() => toggleDestination(destination.id)}
            style={styles.item}
          >
            <View style={styles.itemContent}>
              <View style={styles.destinationInfo}>
                <Text style={styles.locationText}>{destination.location}</Text>
                <Text style={styles.detailText}>
                  Price: ${destination.price.toLocaleString()}
                </Text>
                <Text style={styles.detailText}>
                  Avg. Temperature: {destination.average_yearly_temperature}
                </Text>
              </View>
              {selectedDestinations.includes(destination.id) && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  destinationInfo: {
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  checkmark: {
    color: "green",
    fontSize: 18,
    marginLeft: 8,
  },
});

export default VacationSelector;
