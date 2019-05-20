import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React, { Component } from "react";
import Stats from './Stats';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import { Actions } from 'react-native-router-flux'

class CV extends Component {
    constructor(props) {
        super(props);
        this.pt1();
        console.log(JSON.stringify(this.props.text))
    }

    pt1() {
        console.log("okokokokokok");
        console.log(JSON.stringify(this.props.text))
    }

    render() {

        return (
            <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>
                <Text style={{color: 'white', fontSize:25, marginTop:'15%'}}>Forme du moment </Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Une forme digne de celle de Gourcuff ! </Text>
                <Text style={{color: 'white', fontSize:25}}>Ratio de victoire</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Apparemment t'as jamais osé rentrer une feuille de match</Text>
                <Text style={{color: 'white', fontSize:25}}>Plus grosse correction infligée</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30, textAlign:'center'}}>Apparemment t'es mauvais Jack, t'as jamais infligé quoique ce soit à qui que ce soit !</Text>
                <Text style={{color: 'white', fontSize:25}}>Plus grosse humiliation subie</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Apparemment t'es costaud... du genre invincible !</Text>
                <Text style={{color: 'white', fontSize:25}}>Stérile depuis</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Apparemment tu connais pas le goût de la victoire !</Text>
                <Text style={{color: 'white', fontSize:25}}>Invaincu depuis</Text>
                <Text style={{color: '#488ffb', fontSize:15, marginTop:10, marginBottom:30}}>Apparemment t'es costaud... du genre invincible !</Text>
            </View>
        );
    }

    accueil() {
        Actions.replace("home");
    }
}

export default CV