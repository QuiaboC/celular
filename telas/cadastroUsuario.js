import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="nome" keyboardType="nome" />

      <TextInput style={styles.input} placeholder="cpf" keyboardType="cpf" />

      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.ButtonH}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textoH}>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    width: 200,
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  ButtonH: {
    backgroundColor: "#0a0808",
    marginTop: 20,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 12,
  },
  textoH: {
    color: "#ddd",
    fontWeight: "600",
    fontSize: 15,
  },
});
