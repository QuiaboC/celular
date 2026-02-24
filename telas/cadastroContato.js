import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function cadastroContato({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
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
      
            <Button
              title="Salvar"
              color="#080808"
              onPress={() => navigation.navigate('Home', {nome, telefone, email})}
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