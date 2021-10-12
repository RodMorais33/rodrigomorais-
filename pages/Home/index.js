import React from 'react';
import {View, Text, Button, Image} from 'react-native';

export default function index({navigation}) {
  return (
    <View>
        <Text>ASSINALE A ALTERNATIVA CORRETA</Text>
        <Button title="Iniciar" onPress={ () => {navigation.navigate("Q1");}}/>
    </View>
  );
}