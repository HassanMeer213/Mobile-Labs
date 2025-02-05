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
const styles = StyleSheet.create({
  container: {
    flex: 1, 
        justifyContent: "center"
        alignItems: "center"
        BackgroundColor:"#fff",
        },
        text: {
          fontSize: 20,
          color: :black",
        }
        });
