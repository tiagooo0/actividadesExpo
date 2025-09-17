
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const juegos = [
  { title: "Futbol Mania", score: 9.2, description: "Juego de fútbol con gráficos realistas y torneos online.", image: "https://via.placeholder.com/100" },
  { title: "Aventura Espacial", score: 8.7, description: "Explora planetas y combate enemigos alienígenas.", image: "https://via.placeholder.com/100" },
  { title: "Puzzle Master", score: 9.0, description: "Resuelve rompecabezas y desafíos lógicos.", image: "https://via.placeholder.com/100" },
  { title: "Carreras Extrema", score: 8.5, description: "Compite en carreras de autos futuristas y consigue récords.", image: "https://via.placeholder.com/100" },
  { title: "Batalla Medieval", score: 9.1, description: "Estrategia y combate en un mundo medieval lleno de aventuras.", image: "https://via.placeholder.com/100" },
];

export default function Act6Juegos() {
  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      {juegos.map((juego, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: juego.image }} style={styles.image} />
          <Text style={styles.title}>{juego.title}</Text>
          <Text style={styles.score}>Puntaje: {juego.score}</Text>
          <Text style={styles.description}>{juego.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: { width: 100, height: 100, borderRadius: 10, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: "700", color: "#264653", marginBottom: 4 },
  score: { fontSize: 16, color: "#6c757d", marginBottom: 4 },
  description: { fontSize: 14, color: "#264653", textAlign: "center" },
});
