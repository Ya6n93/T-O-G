import React from 'react';
import {StyleSheet, Text, View, Picker, ImageBackground, AsyncStorage, TouchableOpacity} from 'react-native';
import wallpaper from '../img/wallpaper.jpg'
import {Actions} from "react-native-router-flux";

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            coinche: 'COINCHE',
            petanque: 'PETANQUE',
            urbanfoot: 'URBANFOOT',
            babyfoot: 'BABYFOOT'
        }
    }

    render() {
        return (
            <View style={styles.back}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
            <View style={styles.container}>
                <Text style={styles.title}>Choisis Ton Game!</Text>
                <Text style={styles.title1}>Jeu :</Text>
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
            </View>
        );
    }

    changementbaby() {
        AsyncStorage.setItem('game', 'BABYFOOT', () => {
            AsyncStorage.mergeItem('game', 'BABYFOOT', () => {
                Actions.replace("login");

            });
        });
    }
    changementfoot() {
        AsyncStorage.setItem('game', 'URBANFOOT', () => {
            AsyncStorage.mergeItem('game', 'URBANFOOT', () => {
                Actions.replace("login");

            });
        });
    }
    changementpet() {
        AsyncStorage.setItem('game', 'PETANQUE', () => {
            AsyncStorage.mergeItem('game', 'PETANQUE', () => {
                Actions.replace("login");

            });
        });
    }
    changementcoin() {
        AsyncStorage.setItem('game', 'COINCHE', () => {
            AsyncStorage.mergeItem('game', 'COINCHE', () => {
                Actions.replace("login");

            });
        });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000000',
        marginTop: 300,
        marginBottom: 300,
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 10,
        height: 200,
        width: 200,
        opacity: 0.6,
    },
    title: {
        color: '#fff',
        marginLeft: 50,
        paddingTop: 10,
    },
    title1: {
        color: '#fff',
        marginLeft: 50,
        paddingTop: 30,
    },
    pick: {
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    back: {
        flex:1,
        alignItems: 'center'
    },
    bouton: {
        backgroundColor:'#000',
        width:'75%',
        alignItems:'center',
        marginBottom:'1%',
        borderRadius:10
    }
});
