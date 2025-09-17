import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const juegos = [
  { title: "Futbol Mania", score: 9.2, description: "Juego de fútbol con gráficos realistas y torneos online.", image: "https://via.placeholder.com/100" },
  { title: "Aventura Espacial", score: 8.7, description: "Explora planetas y combate enemigos alienígenas.", image: "https://via.placeholder.com/100" },
];

export default function Act8JuegosSafeArea() {
  const insets = Platform.OS !== "web" ? useSafeAreaInsets() : { top: 20, bottom: 20 };

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" />
      <ScrollView style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 20 }}>
        {juegos.map((juego, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: juego.image }} style={styles.image} />
            <Text style={styles.title}>{juego.title}</Text>
            <Text style={styles.score}>Puntaje: {juego.score}</Text>
            <Text style={styles.description}>{juego.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: { width: 100, height: 100, borderRadius: 10, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: "700", color: "#264653", marginBottom: 4 },
  score: { fontSize: 16, color: "#6c757d", marginBottom: 4 },
  description: { fontSize: 14, color: "#264653", textAlign: "center" },
});
