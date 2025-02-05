import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type DecrementProps = {
  value: number;
  setValue: (value: number) => void;
};

const Decrement: React.FC<DecrementProps> = ({ value, setValue }) => {
  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Decrement;

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
