import React from "react";
import { View, ScrollView, Text, Button, DatePickerIOS, Platform, StatusBar } from "react-native";
import StyleSheet from '../estilo/style.js';
import { AdMobBanner } from 'react-native-admob';


class SobreScreen extends React.Component {


   static navigationOptions = {
    title: 'Sobre',
    headerStyle: {
      backgroundColor: StyleSheet.primaryColor.color,
    },
    headerTintColor: StyleSheet.textoBranco.color,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {

    return (
      <View style={{ flex: 1 }}>
      <ScrollView>
      <StatusBar backgroundColor={StyleSheet.primaryDarkColor.color} barStyle="light-content" />
        <Text style={StyleSheet.textoJustificadoSobre}>A numerologia é o estudo do significado oculto dos números e sua influência no comportamento e no destino dos homens.</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>O cálculo do Ano Pessoal mostra a partir da data do aniversário possíveis influências do ano que está por vir. O cálculo do Ano Pessoal se da por ciclos de 9 em 9 anos que a partir de cada data de aniversário é feito o cálculo e identificando em que estágio se encontra a vida pessoal.</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>Para calcular o seu Ano Pessoal, basta preencher a data de aniversário do ano que deseja saber e apertar em ˜Calcular˜. O aplicativo trará o valor calculado e informações sobre o resultado do cálculo.</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>Exemplo: Aniversário em 17/05/2022, ao colocar esta data você saberá como será o seu ano de 2022, lembrando que se da a partir da data do aniversário e não da data inicial do ano.</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>Este aplicativo tem o objetivo de entreterimento e jamais deverá ser levado em consideração como único instrumento numerológico.</Text>
        <Text style={StyleSheet.tituloJustificadoSobre}>Referências utilizadas:</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>https://anamariabraga.globo.com/materia/como-calcular-seu-ano-pessoal-a-partir-da-data-de-aniversario</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>https://www.wemystic.com.br/artigos/ano-pessoal-2019/</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>https://www.astrocentro.com.br/blog/previsoes/ano-pessoal-2019/</Text>
        <Text style={StyleSheet.textoJustificadoSobre}>https://numerologiacabalistica.org/ano-pessoal-em-2019/</Text>
      </ScrollView>
    
      </View>

    );
  }
}

export default SobreScreen
