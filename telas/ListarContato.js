import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Contato({ navigation, route }) {
  const { nome, telefone, email } = route.params || {};

  return (
    <View style={styles.container}>
        
      <TextInput style={styles.input} value={nome}/>
      <TextInput
        style={styles.input}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        value={telefone}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <View style={styles.buttonLogin}>
        <TouchableOpacity
          style={styles.ButtonC}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textoC}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonH}
          onPress={() => navigation.navigate("Cadastro")}
        >
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
