import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const { nome, telefone, email } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("Contato", { nome, telefone, email })}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            }}
          />
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.tel}>{telefone}</Text>
        </View>
      </View>
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