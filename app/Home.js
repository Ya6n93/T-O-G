import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import wallpaper from '../img/wallpaper.jpg';
import { Actions } from 'react-native-router-flux';
import {Ionicons} from "@expo/vector-icons";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
        };
        this.init_pseudo()
    }

    init_pseudo() {
        AsyncStorage.getItem('pseudo', (err, getPseudo) => {
            this.setState(
                { pseudo: getPseudo }
            )
        });
    }

    logout() {
        let keys = ['id', 'email', 'pseudo', 'password', 'header', 'user', 'game'];
        AsyncStorage.multiRemove(keys);
        console.log("DECONNEXION ICI");
        Actions.replace("game");
    }

    changegame() {
        Actions.replace("changegame")
    }

    render() {
        return (

                <View style={styles.container}>
                    <ImageBackground
                        source={wallpaper}
                        style={{width:'100%', height:'100%', position:'absolute'}}
                    />
                    <Ionicons style={{position:'absolute', top:20, left:0}} name="logo-game-controller-b" size={40} color="white" onPress={this.changegame} />
                    <Ionicons style={{position:'absolute', top:20, right:0}}name="md-log-in" size={40} color="white" onPress={this.logout} />

                <View style={styles.background}>
                </View>

                <Text style = {styles.text} value={this.state.pseudo}>
                    {this.state.pseudo}
                </Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.ligues}>
                        <Text style = {styles.textbutton}>
                            Ligues
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.matchs}>
                        <Text style = {styles.textbutton}>
                            Matchs
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.classement}>
                        <Text style = {styles.textbutton}>
                            Classement
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.communautes}>
                        <Text style = {styles.textbutton}>
                            Communautés
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.cv}>
                        <Text style = {styles.textbutton}>
                            CV
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.profil}>
                        <Text style = {styles.textbutton}>
                            Profil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.tournois}>
                        <Text style = {styles.textbutton}>
                            Tournois
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    ligues() {
        Actions.replace("ligues");
    }

    matchs() {
        Actions.replace("matchs");
    }

    classement() {
        Actions.replace("classement");
    }

    communautes() {
        Actions.replace("communautés");
    }

    cv() {
        Actions.replace("cv");
    }

    tournois() {
        Actions.replace("tournois");
    }

    profil() {
        Actions.replace("profil");
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex:1
    },

    button: {

        textAlign: 'center',
        marginBottom: 40,
        width: 260,
        marginTop:30,
        alignItems: 'center',
        color: '#fff',
    },
    text: {
        marginTop:'50%',
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
    },
    textbutton:{
        alignItems: "center",
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    background: {
        marginTop:'50%',
        backgroundColor: '#000',
        alignItems: "center",
        width: 370,
        borderRadius: 10,
        height: 420,
        opacity: 0.6,
        position: "absolute"
    },
});