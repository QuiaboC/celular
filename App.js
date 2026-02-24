import * as React from 'react';
import { View, Text,Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./telas/home.js";
import LoginScreen from "./telas/login.js";
import CadastroScreen from "./telas/cadastroUsuario.js"
import cadastroContato from "./telas/cadastroContato.js"
import Contato from './telas/ListarContato.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({title: 'lista de contatos',  
        headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
                <Text style={{ fontSize: 24, marginRight: 10 }}>+</Text>
              </TouchableOpacity>
            ),
            })}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen}/>
        <Stack.Screen name="CadastroContato" component={cadastroContato}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;