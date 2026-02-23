import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
              }}
            />
      
            <TextInput
              style={styles.input}
              placeholder="email"
              keyboardType="email-address"
            />
      
            <TextInput
              style={styles.input}
              placeholder="senha"
              secureTextEntry={true}
            />
      
            <Button
              title="Entrar"
              color="#080808"
              onPress={() => navigation.navigate('Home')}
            />
      
            <Button
              title="Cadastrar"
              color="#080808"
              onPress={() => navigation.navigate('Cadastro')}
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