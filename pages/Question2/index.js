import React, {useState} from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

export default function Q2({navigation, route}) {
    var point = route.params;
    function verifica(ponto) {
        console.log("Acertos: " + point)
        point = point + ponto;
    }

return (
    <View>
        <Text> Qual o livro mais vendido no mundo a seguir à Bíblia? </Text>
    <Button title="O Senhor dos Anéis" onPress={ () => {verifica(0)}}/>
    <Button title="O Pequeno Príncipe" onPress={ () => {verifica(0)}}/>
    <Button title="Dom Quixote" onPress={ () => {verifica(1)}}/>

    <Button title="Proxima Pergunta" onPress={ () => {navigation.navigate("Q3", point);}}/>


    </View>
)
};