import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type IncrementProps = {
  value: number;
  setValue: (value: number) => void;
};

const Increment: React.FC<IncrementProps> = ({ value, setValue }) => {
  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Increment;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
