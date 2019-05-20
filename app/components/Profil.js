import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import wallpaper from '../../img/wallpaper.jpg';
import {AsyncStorage} from 'react-native';
import axios from "axios";
import {Ionicons} from "@expo/vector-icons";
import {Actions} from "react-native-router-flux";

export default class Communautes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pseudo: '',
            token: ''
        };
        this.start_info()
    }

    onPressButton = () => {
        let user = {};
        console.log(this.state.email, this.state.pseudo);

        let headers = {
            'Content-Type': 'application/json',
            'cookie': this.state.token
        };

        AsyncStorage.getItem('user', (err, getUser) => {
            user = JSON.parse(getUser)["data"];
            user["email"] = this.state.email;
            user["pseudo"] = this.state.pseudo;
            console.log(JSON.stringify(user));
            axios.post('http://10.0.2.2:8080/user?gameType=Urbanfoor', user, {headers: headers}).then(response => {
                let obj = response.data;

                AsyncStorage.setItem('user', JSON.stringify(obj), () => {
                    AsyncStorage.mergeItem('user', JSON.stringify(obj));
                });
                AsyncStorage.setItem('email', obj["data"]["email"], () => {
                    AsyncStorage.mergeItem('email', obj["data"]["email"]);
                });
                AsyncStorage.setItem('pseudo', obj["data"]["pseudo"], () => {
                    AsyncStorage.mergeItem('pseudo', obj["data"]["pseudo"]);
                });

                Actions.replace("home");
            }).catch(error => {
                console.log("no : " + error);
            })
        });
    };

    accueil() {
        Actions.replace("home");
    }


    start_info(){
        AsyncStorage.getItem('user', (err, getUser) => {
           console.log("--------------------------------------------------------------------------");
           let objetUser = JSON.parse(getUser);
           console.log(objetUser["data"]["pseudo"]);

            this.setState({pseudo: objetUser["data"]["pseudo"]})
        });

        AsyncStorage.getItem('email', (err, getEmail) => {
            this.setState(
                { email: getEmail }
            )
        });
        AsyncStorage.getItem('pseudo', (err, getPseudo) => {
            this.setState(
                { pseudo: getPseudo }
            )
        });

        AsyncStorage.getItem('header', (err, getHeader) => {
            this.setState(
                { token: getHeader }
            )
        });


    }

    render() {
        //this.start_info()
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={wallpaper}
                    style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>
                <View style={styles.SquareShapeView}>
                    <Text style={styles.text}>
                        Pseudo
                    </Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid = "transparent"
                        value={this.state.pseudo}
                        placeholder = "Your Pseudo"
                        placeholderTextColor = "white"
                        autoCapitalize = "none"
                        onChangeText={(text) => this.setState({pseudo: text})}
                    />
                    <Text style={styles.text}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        underlineColorAndroid = "transparent"
                        placeholder = "email"
                        placeholderTextColor = "white"
                        autoCapitalize = "none"
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TouchableOpacity onPress={this.onPressButton}>
                        <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 20}} >
                            VALIDER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color:'white',
        marginTop: 20,
        marginBottom: 20,
        left: -30
    },
    SquareShapeView: {
        left:5,
        top:-100,
        width: 300,
        height: 'auto',
        opacity:0.7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    input: {
        width: 200,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 20
    }
});