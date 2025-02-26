import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import CallAPI from "../components/callAPI";

export default function Lab5() {
  const [showAPI, setShowAPI] = useState<boolean>(false);
  const router = useRouter();

  const toggleAPIComponent = () => {
    setShowAPI(!showAPI);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab 5: API Call with useEffect</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={showAPI ? "Hide API Data" : "Show API Data"}
          onPress={toggleAPIComponent}
        />
      </View>

      {showAPI && <CallAPI />}

      <View style={styles.backButtonContainer}>
        <Button title="Back to Home" onPress={() => router.push("/")} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 30,
  },
  backButtonContainer: {
    marginTop: 30,
  },
});
