// Components/Act9MiniAppPerfil.js
import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button, StatusBar, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import perfil from "../assets/perfil.jpg"; // asegúrate de que la imagen exista

const hobbies = [
  "Jugar al rugby subacuático",
  "Hacer bromas a amigos",
  "Resolver puzzles",
  "Jugar al ajedrez",
  "Leer comics",
];

export default function Act9MiniAppPerfil() {
  const insets = Platform.OS !== "web" ? useSafeAreaInsets() : { top: 20, bottom: 20 };
  const [liked, setLiked] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" />
      
      {/* Header fijo */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.headerText}>Perfil de Julian</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: insets.bottom + 20, paddingHorizontal: 20 }}>
        {/* Foto de perfil */}
        <Image 
          source={perfil} 
          style={styles.image} 
        />

        {/* Info básica */}
        <Text style={styles.info}>¡Hola! Soy Julian y me encanta joder</Text>
        
        {/* Botón custom */}
        <View style={styles.buttonContainer}>
          <Button 
            title={liked ? "Siguiendo" : "Seguir"} 
            onPress={() => setLiked(!liked)} 
            color={liked ? "#e76f51" : "#264653"} 
          />
        </View>

        {/* Lista de hobbies */}
        <Text style={styles.subtitle}>Mis hobbies favoritos:</Text>
        {hobbies.map((hobby, index) => (
          <View key={index} style={styles.hobbyContainer}>
            <Text style={styles.hobbyText}>• {hobby}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#264653",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: { color: "white", fontSize: 20, fontWeight: "700" },
  image: { width: 150, height: 150, borderRadius: 75, alignSelf: "center", marginBottom: 12 },
  info: { fontSize: 16, color: "#264653", textAlign: "center", marginBottom: 12 },
  buttonContainer: { marginBottom: 20, alignItems: "center" },
  subtitle: { fontSize: 18, fontWeight: "700", color: "#264653", marginBottom: 10 },
  hobbyContainer: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 8 },
  hobbyText: { fontSize: 16, color: "#264653" },
});
