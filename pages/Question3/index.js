import React, {useState} from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

export default function Q3({navigation, route}) {
    var point = route.params;
    function verifica(ponto) {
        console.log("Acertos: " + point)
        point = point + ponto;
    }

    return (
        <View>
            <Text> O que a palavra legend significa em português</Text>
        <Button title="Legenda" onPress={ () => {verifica(0)}}/>
        <Button title="Conto" onPress={ () => {verifica(0)}}/>
        <Button title="Lenda" onPress={ () => {verifica(1)}}/>
    
        <Button title="RESPOSTAS" onPress={ () => {navigation.navigate("Resp", point);}}/>

        </View>
    )
    };