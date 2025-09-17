import { View, Text, StyleSheet } from "react-native";

export default function Act1Hola() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: { fontSize: 30, color: "#2a9d8f", fontWeight: "700" },
});
