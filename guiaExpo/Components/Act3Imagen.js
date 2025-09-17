import { View, Image, Text, StyleSheet } from "react-native";

import perfil from "../assets/perfil.jpg";

export default function Act3Imagen() {
  return (
    <View style={styles.container}>
      <Image source={perfil} style={styles.image} />
      <Text style={styles.name}>Minion Triste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70, // redondea la imagen
    marginBottom: 8,
  },
  name: { fontSize: 16 },
});
