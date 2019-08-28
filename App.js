import React from "react";
import { View, Text, Button, DatePickerIOS, Platform} from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import DatePicker from 'react-native-datepicker';
import HomeScreen from './paginas/Home.js';
import DetailsScreen from './paginas/Details.js';
import SobreScreen from './paginas/Sobre.js';
import StyleSheet from './estilo/style.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SobreStack = createStackNavigator({
  Sobre: SobreScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Sobre: SobreStack
  },
  {
     defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'birthday-cake';
        } else if (routeName === 'Sobre') {
          iconName = 'info-circle';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: StyleSheet.primaryColor.color,
      inactiveTintColor: StyleSheet.textoCinza.color,
    }/*Other configuration remains unchanged */
  }
));
