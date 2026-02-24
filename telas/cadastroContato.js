import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function cadastroContato({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        value={telefone}
        placeholder="telefone"
        keyboardType="phone-pad"
        onChangeText={setTelefone}
      />

      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.ButtonH}
        onPress={() => navigation.navigate("Home", { nome, telefone, email })}
      >
        <Text style={styles.textoH}>Salvar</Text>
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
