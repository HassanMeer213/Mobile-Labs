import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { fruits } from "../components/FruitList";
import Button_Template from "../components/button_template";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to my application</Text>
        <Button_Template />
      </View>
      <View style={styles.fruitContainer}>
        <Text style={[styles.text, { color: "red" }]}>{fruits[0]}</Text>
        <Text style={[styles.text, { color: "orange" }]}>{fruits[1]}</Text>
        <Text style={[styles.text, { color: "green" }]}>{fruits[2]}</Text>
      </View>
      <StatusBar style="auto" />
      <Button title="lab3 " onPress={()=>{router.push("/lab_3")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  fruitContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});
