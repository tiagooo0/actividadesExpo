import { useState } from "react";
import { View, StatusBar, Text, Button } from "react-native";

export default function Act7StatusBar() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <View style={{ padding: 20, alignItems: "center", backgroundColor: modoOscuro ? "#264653" : "#f1f1f1" }}>
      <StatusBar 
        barStyle={modoOscuro ? "light-content" : "dark-content"} 
        backgroundColor={modoOscuro ? "#264653" : "#f1f1f1"} 
      />
      <Text style={{ fontSize: 18, marginBottom: 10, color: modoOscuro ? "white" : "black" }}>
        {modoOscuro ? "Modo Oscuro" : "Modo Claro"}
      </Text>
      <Button 
        title="Cambiar modo" 
        onPress={() => setModoOscuro(!modoOscuro)} 
        color={modoOscuro ? "#e76f51" : "#264653"} 
      />
    </View>
  );
}
