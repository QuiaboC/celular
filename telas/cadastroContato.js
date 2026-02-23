import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function cadastroContato({ navigation }) {
  return (
    <View style={styles.container}>

      <TextInput
              style={styles.input}
              placeholder="nome"
              keyboardType="nome"
            />
      
            <TextInput
              style={styles.input}
              placeholder="telefone"
              keyboardType="cpf"
            />
      
            <TextInput
              style={styles.input}
              placeholder="email"
              keyboardType="email-address"
            />
      
            <Button
              title="Salvar"
              color="#080808"
              onPress={() => navigation.navigate('Home', {user})}
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,

  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});