import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const usuarios = [
  {
    nome: "Nilson",
    token: "ExponentPushToken[3Hv4dVKcWbRyloGKHGbO3s]",
  },
  {
    nome: "Chrystian",
    token: "ExponentPushToken[AUxqR7JMz6k1P6eCCg3ZmP]",
  },
  {
    nome: "Maria",
    token: "ExponentPushToken[ObAUjnLHTJruel2HZ-hBko]",
  },
  {
    nome: "Juliana",
    token: "ExponentPushToken[jl3Ar8I01hxa__1kKFDW35]",
  },
  {
    nome: "Sérgio",
    token: "ExponentPushToken[OWeM0aOYDHwVbvjRHP7TTe]",
  },
  {
    nome: "Danilo",
    token: "ExponentPushToken[JeZS05MO7y5JQxBlLU4yji]",
  }
];

export default function App() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function enviarNotificacao() {
    if (!usuarioSelecionado || !titulo || !mensagem) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    const usuario = usuarios.find((u) => u.token === usuarioSelecionado);

    const message = {
      to: usuario.token,
      sound: "default",
      title: titulo,
      body: mensagem,
      data: { nome: usuario.nome },
    };

    try {
      const response = await fetch(
        "https://exp.host/--/api/v2/push/send",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-encoding": "gzip, deflate",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        }
      );

      const data = await response.json();
      console.log(data);

      Alert.alert("Sucesso", `Notificação enviada para ${usuario.nome}`);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível enviar a notificação");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Enviar Push Notification</Text>

      <Text style={styles.label}>Selecionar pessoa</Text>

      <View style={styles.pickerBox}>
        <Picker
          selectedValue={usuarioSelecionado}
          onValueChange={(itemValue) => setUsuarioSelecionado(itemValue)}
        >
          <Picker.Item label="Selecione um usuário" value="" />
          {usuarios.map((u, index) => (
            <Picker.Item key={index} label={u.nome} value={u.token} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Mensagem</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />

      <TouchableOpacity style={styles.botao} onPress={enviarNotificacao}>
        <Text style={styles.textoBotao}>Enviar Notificação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  botao: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});