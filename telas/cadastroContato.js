import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";

export default function CadastroContato({ route, navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  function inserirDados() {
  const { usuario } = route.params || {};

  if (!usuario?.id) {
    console.log("Usuário não encontrado");
    return;
  }

  axios
    .post("http://localhost:3000/contatos", {
      nomeContato: nome,
      telefone: telefone,
      usuarioId: usuario.id,
    })
    .then((response) => {
      console.log("Salvo:", response.data);

      navigation.goBack(); 
    })
    .catch((error) => {
      console.log("Erro ao salvar:", error);
    });
}
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        keyboardType="phone-pad"
        onChangeText={setTelefone}
      />

      <TouchableOpacity style={styles.ButtonH} onPress={inserirDados}>
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
