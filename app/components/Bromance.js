import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React, { Component } from "react";
import Stats from './Stats';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import { Actions } from 'react-native-router-flux';

class Bromance extends Component {
    render() {

        return (
            <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>
                <Text style={{color: 'white', fontSize:25, marginTop:'15%'}}>Mon wingman</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Y a pas de tendance très nette</Text>
                <Text style={{color: 'white', fontSize:25}}>Mon boulet, mon castrateur</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Y a pas de tendance très nette</Text>
                <Text style={{color: 'white', fontSize:25}}>Mon chat noir, mon tortionnaire</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Y a pas de tendance très nette</Text>
                <Text style={{color: 'white', fontSize:25}}>Ma victime, ma bitch</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Y a pas de tendance très nette</Text>
            </View>
        );
    }

    accueil() {
        Actions.replace("home");
    }

}

export default Bromance