import React, { useState } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

export default function Q1({ navigation, route }) {
    var point = 0;
    function verifica(ponto) {
        point = point + ponto;
        console.log("Acertos: " + point)
    }

    return (
        <View>
            <Text> De onde é a invenção do chuveiro elétrico? </Text>
            <Button title="Brasil" onPress={() => { verifica(1) }} />
            <Button title="França" onPress={() => { verifica() }} />
            <Button title="Estados Unidos" onPress={() => { verifica(0) }} />
            <Button title="Proxima Pergunta" onPress={() => { navigation.navigate("Q2", point); }} />

        </View>
    )
};