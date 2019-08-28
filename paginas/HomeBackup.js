import React from "react";
import { View, Text, TouchableOpacity, DatePickerIOS, Platform, StatusBar, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
// import DatePicker from 'react-native-datepicker';
import StyleSheet from '../estilo/style.js';
import { AdMobBanner } from 'react-native-admob';


const formatar = (data) => {
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const dia = data.getDate().toString().padStart(2, '0');

  return dia+"/"+mes+"/"+ano;
};

class HomeScreen extends React.Component {
constructor(props){
    super(props);
    this.state = {date: formatar(new Date())}
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

 static navigationOptions = {
    title: 'Ano Pessoal',
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
      <View style={{flex: 1}}>
      <ScrollView>
       <StatusBar backgroundColor={StyleSheet.primaryDarkColor.color} barStyle="light-content" />
        <Text style={StyleSheet.textoCentralizado}>O Ano Pessoal é considerado a partir de cada aniversário, e cada ano representa uma fase conforme a numerologia.</Text>
        <Text style={StyleSheet.textoCentralizado}>Preencha a data do seu aniversário e descubra o Ano Pessoal atual</Text>

      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        format="DD/MM/YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            display: 'none'
          },
          dateInput: {
            marginLeft: 10
          }
        }}
        style={StyleSheet.inputCentralizado}
        onDateChange={(date) => {this.setState({date: date})}}
      />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details', {
          	dataNascimento: this.state.date.toString()
          })}>
            <View style = {StyleSheet.botaoCentralizado}>
               <Text style = {StyleSheet.textoBotaoCentralizado}>Calcular</Text>
           </View>
        </TouchableOpacity>
      </ScrollView>
      <AdMobBanner
        adSize="smartBanner"
        adUnitID="XXX"
        onAdFailedToLoad={error => console.error(error)}
      />
      </View>
    );
  }
}

export default HomeScreen
