import { View, Button, Alert, Pressable, Text, StyleSheet } from "react-native";

export default function Act4Botones() {
  return (
    <View style={styles.container}>
      <Button
        title="Presioname"
        onPress={() => Alert.alert("¡Hola!", "Presionaste el botón")}
      />

      <Pressable
        onPress={() => Alert.alert("Pressable", "Presionaste el Pressable")}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
        <Text style={styles.pressText}>Pressable custom</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12, marginBottom: 40 },
  pressable: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a90e2",
    alignItems: "center",
  },
  pressed: { opacity: 0.7 },
  pressText: { color: "white", fontWeight: "700" },
});
