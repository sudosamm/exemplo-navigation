import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function Home({ navigation, route }) {
    const usuario = route.params?.usuario;

    useEffect(
        () => {
            if(usuario) {
                navigation.setOptions({
                    title: "Bem vinde, mano " + usuario
                })
            }
        }, [usuario]
    )
    
    return(
        <View>
            <Text>
                Olá, seja bem-vinde!
            </Text>
            <Button title="Voltar" onPress={() => {
                navigation.goBack();
            }}/>
            <Button title="Navegar" onPress={() => {
                navigation.navigate('Login')
            }}/>
            <Button title="Logout" onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [{name:'Login'}],
                })
            }}/>
        </View>
    )
}