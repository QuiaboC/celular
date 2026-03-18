import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

export default function HomeScreen({ route, navigation }) {
  const [contatos, setContatos] = useState([]);

  const { usuario } = route.params;

  function consultarDados() {
    axios
      .get(`http://localhost:3000/contatos?usuarioId=${usuario.id}`)
      .then(function (response) {
        console.log("CONTATOS:", response.data);
        setContatos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useFocusEffect(
  useCallback(() => {
    consultarDados();
  }, [])
);
  return (
    <View style={styles.container}>
      {contatos.map((contato) => (
        <View key={contato.id} style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Contato", {
                id: contato.id,
                usuarioId: contato.usuarioId,
              })
            }
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              }}
            />
          </TouchableOpacity>

          <View style={styles.info}>
            <Text style={styles.nome}>{contato.nomeContato}</Text>
            <Text style={styles.tel}>{contato.telefone}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
  },
  info: {
    flexDirection: "column",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tel: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});
