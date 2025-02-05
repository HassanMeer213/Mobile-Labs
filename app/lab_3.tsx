import React, { useState } from "react";
import {Button, Text ,View} from "react-native";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

const Lab3 = () => {
  const [value, setValue] =useState<number>(0);
  return (
    <View>
      <Text>My Value: {value} </Text>
      <Increment value={value} setValue={setValue}/>
      <Decrement value={value} setValue={setValue}/>
    </View>
  );
};

export default Lab3;
