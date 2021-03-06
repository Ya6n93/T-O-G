import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React, { Component } from "react";
import Stats from './Stats';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import { Actions } from 'react-native-router-flux';

class Palmares extends Component {
    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>
                <Text style={{color: 'white', fontSize:25, marginTop:'15%'}}>Palmarès vide ..</Text>
            </View>
        );
    }

    accueil() {
        Actions.replace("home");
    }
}

export default Palmares