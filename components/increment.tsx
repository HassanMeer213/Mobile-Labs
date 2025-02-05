import React from "react";
import {text, view} from "react-native";

type IncrementProps = {value: number: setValue: (value: number) => void};

const Increment: React.FC<IncrementProps> = ({ value, setValue}) => {
  const handleIncrement = () => {
    setValue{value + 1};
  };

  return (
    <View>
      <TouchableOpacity onPress={handleIncrement}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Incerment;
