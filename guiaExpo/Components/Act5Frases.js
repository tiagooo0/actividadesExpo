import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function Act5Frases() {
    const frases = [
        'La vida es 10% lo que me ocurre y 90% cómo reacciono a ello. - Charles R. Swindoll',
        'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer',
        'No cuentes los días, haz que los días cuenten. - Muhammad Ali',
        'el burro no coje por lindo si no por insistidor',
        'vamos a volver', 
        'el que no llora no mama',
        'el que mucho abarca poco aprieta',
        'mas vale pajaro en mano que cien volando',
        'no hay mal que por bien no venga',
        'a caballo regalado no se le miran los dientes',
        'no dejes para mañana lo que puedas hacer hoy',
        'al mal tiempo buena cara',
        'dime con quien andas y te dire quien eres',
        'no hay peor ciego que el que no quiere ver',
        'a quien madruga Dios le ayuda',
        'el que busca encuentra',
  ];

  return (
    <ScrollView style={styles.scrollView}>
      {frases.map((frase, index) => (
        <View key={index} style={styles.fraseContainer}>
          <Text style={styles.fraseText}>{frase}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { marginVertical: 20 },
  fraseContainer: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  fraseText: {
    fontSize: 16,
    color: "#264653",
  },
});
