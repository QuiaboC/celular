import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function Contato({ navigation, route }) {
    const { nome, telefone,email } = route.params || {};

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                value={nome}
                defaultValue={nome}
            />
            <TextInput
                style={styles.input}
                value={email}
                defaultValue={email}
                keyboardType="email-address"
            />
            <TextInput
                value={telefone}
                style={styles.input}
                defaultValue={telefone}
                keyboardType="telefone"
            />

            <Button
                title="Alterar"
                color="#080808"
                onPress={() => navigation.navigate('Home', {email, nome, telefone})}
            />

            <Button
                title="Excluir"
                color="#080808"
                onPress={() => navigation.navigate('Home')}
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