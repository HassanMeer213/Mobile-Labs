import { StyleSheet, Text, View, Button } from "react-native";

export default function Button_Template() {
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => alert("Button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
