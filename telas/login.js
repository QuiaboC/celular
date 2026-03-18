import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

function consultarDados() {
  axios
    .get("http://localhost:3000/usuarios", {
      params: {
        email: email,
        senha: senha,
      },
    })
    .then(function (response) {
      if (response.data.length > 0) {
        const usuario = response.data[0];

        console.log("LOGIN OK:", usuario);

        navigation.navigate("Home", {
          usuario: usuario,
        });
      } else {
        alert("Usuário não encontrado");
      }
    })
    .catch(function (error) {
      console.log("ERRO LOGIN:", error);
    });
}
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.buttonLogin}>
        <TouchableOpacity
          style={styles.ButtonH}
          onPress={consultarDados}
        >
          <Text style={styles.textoH}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonC}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textoC}>Cadastrar</Text>
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
    flexDirection: "column",
    margin: 10,
  },
  tinyLogo: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 50,
    padding: 35,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
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
    backgroundColor: "#ddd",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginBottom: 7,
    borderWidth: 1,
    borderRadius: 12,
  },
  textoH: {
    fontWeight: "600",
    fontSize: 15,
  },
  ButtonC: {
    backgroundColor: "#0a0808",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 12,
  },
  textoC: {
    color: "#ddd",
    fontWeight: "600",
    fontSize: 15,
  },
});
