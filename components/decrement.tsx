import React from "react";
import ( Text, TouchableOpacity, View › from "react-native";

type IncrementProps = { value: number; setValue: (value: number) => void };
                       
const Decrement: = () =>{
  return(
    <View>
      <TouchalbeOpacity onPress={() => console.log("Decrement")}>
        <Text>I am decrementing</Text>
      <TouchableOpacity>
    </View>
  );
};

export default Decrement;
