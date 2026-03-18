import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contato({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const { id, usuarioId } = route.params || {};

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3000/contatos/${id}`)
      .then((response) => {
        const contato = response.data;
        setNome(contato.nomeContato);
        setTelefone(contato.telefone);
      })
      .catch((error) => console.log(error));
  }, [id]);

  function editarContato() {
    axios
      .put(`http://localhost:3000/contatos/${id}`, {
        id: id,
        nomeContato: nome,
        telefone: telefone,
        usuarioId: usuarioId,
      })
      .then(() => {
        console.log("Atualizado");
        navigation.goBack();
      })
      .catch((error) => console.log(error));
  }

  function excluirContato() {
    axios
      .delete(`http://localhost:3000/contatos/${id}`)
      .then(() => {
        console.log("Deletado");
        navigation.goBack();
      })
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
        placeholder="Telefone"
      />

      <View style={styles.buttonLogin}>
        <TouchableOpacity style={styles.ButtonC} onPress={editarContato}>
          <Text style={styles.textoC}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonH} onPress={excluirContato}>
          <Text style={styles.textoC}>Excluir</Text>
        </TouchableOpacity>
      </View>

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
    buttonLogin: {
    flexDirection: 'column',
    marginTop: 20,
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
  ButtonC: {
    backgroundColor:  "#0a0808",
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 12,
  },
  ButtonH: {
    backgroundColor:  "#bd2222",
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 12,
  },
  textoC: {
    color: '#ddd',
    fontWeight: '600',
    fontSize: 15,
  }
});
