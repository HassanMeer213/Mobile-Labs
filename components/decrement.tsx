import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Decrement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
