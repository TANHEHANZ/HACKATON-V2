import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          router.push("pages");
        }}
        style={{ backgroundColor: "green", padding: 15, }}
      >
        <Text style={{color:'white'}}>Ir a home</Text>
      </TouchableOpacity>
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
});
