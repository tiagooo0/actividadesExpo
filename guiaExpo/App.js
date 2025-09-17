import { ScrollView, SafeAreaView, StatusBar } from "react-native";
import Act1Hola from "./Components/Act1Hola";
import Act2Tarjeta from "./Components/Act2Tarjeta";
import Act3Imagen from "./Components/Act3Imagen";
import Act4Botones from "./Components/Act4Botones";
import Act5Frases from "./Components/Act5Frases";
import Act6JuegosSafeArea from "./Components/Act6JuegosSafeArea";
import Act7StatusBar from "./Components/Act7StatusBar";
import Act8JuegosSafeArea from "./Components/Act8JuegosSafeArea";
import Act9MiniAppPerl from "./Components/Act9MiniAppPerfil";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Act1Hola />
        <Act2Tarjeta /> 
        <Act3Imagen />
        <Act4Botones />
        <Act5Frases />
        <Act6JuegosSafeArea />
        <Act7StatusBar />        
        <Act8JuegosSafeArea />
        <Act9MiniAppPerl />
      </ScrollView>
    </SafeAreaView>
  );
}
