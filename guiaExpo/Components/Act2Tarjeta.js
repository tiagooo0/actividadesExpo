import { View, Text, StyleSheet } from "react-native";

export default function Act2Tarjeta() {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>Tiago Hürst</Text>
      <Text style={styles.curso}>6to Año</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  nombre: { fontWeight: "700", fontSize: 18, marginBottom: 6, color: "#264653" },
  curso: { fontSize: 16, color: "#6c757d" },
});
