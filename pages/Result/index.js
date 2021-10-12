import React, {useState} from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

export default function Resp({navigation, route}) {
var point = route.params;
function verifica(ponto) {
   console.log("Acertos: " + point)
}

return (
    <View>
        <Text> RESPOSTAS CORRETAS </Text>
   
    <Button title="Voltar ao Inicio" onPress={ () => {navigation.navigate("home");}}/>


    </View>
)
};