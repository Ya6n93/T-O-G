import React, { Component } from 'react'
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";


export default class ChangeGame extends Component {
    constructor(props) {
        super();
        this.state = {
                coinche: 'COINCHE',
            petanque: 'PETANQUE',
            urbanfoot: 'URBANFOOT',
            babyfoot: 'BABYFOOT'
        }
    }


    accueil() {
        Actions.replace("home");
    }

    changement() {
        console.log("ok");
        // Change le sharedpreference avec cette valeur
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>

                <Text style={{color:'white', marginBottom:'5%', fontSize: 40}}> Choisissez votre jeu</Text>

                <TouchableOpacity onPress={this.changementcoin.bind(this)} style={styles.bouton}>
                    <Text style={styles.button}>
                        {this.state.coinche}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changementpet.bind(this)} style={styles.bouton}>
                    <Text style={styles.button}>
                        {this.state.petanque}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changementfoot.bind(this)} style={styles.bouton}>
                    <Text style={styles.button}>
                        {this.state.urbanfoot}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changementbaby.bind(this)} style={styles.bouton}>
                    <Text style={styles.button}>
                        {this.state.babyfoot}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    changementbaby() {
        AsyncStorage.setItem('game', 'BABYFOOT', () => {
            AsyncStorage.mergeItem('game', 'BABYFOOT', () => {
                Actions.replace("home");

            });
        });
    }
    changementfoot() {
        AsyncStorage.setItem('game', 'URBANFOOT', () => {
            AsyncStorage.mergeItem('game', 'URBANFOOT', () => {
                Actions.replace("home");

            });
        });
    }
    changementpet() {
        AsyncStorage.setItem('game', 'PETANQUE', () => {
            AsyncStorage.mergeItem('game', 'PETANQUE', () => {
                Actions.replace("home");

            });
        });
    }
    changementcoin() {
        AsyncStorage.setItem('game', 'COINCHE', () => {
            AsyncStorage.mergeItem('game', 'COINCHE', () => {
                Actions.replace("home");

            });
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        color:'white',
        fontSize:25,
    },
    bouton: {
        backgroundColor:'#000',
        width:'75%',
        alignItems:'center',
        marginBottom:'1%',
        borderRadius:10
    }

});