import React , { Component } from 'react';
import {AsyncStorage} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Linking,
    ImageBackground,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import { Register } from './Register';
import email from 'react-native-email';
import { Actions } from 'react-native-router-flux';
import wallpaper from "../../img/wallpaper.jpg";
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            password: '',
        };
    };

    render()
    {
        return (
            <View style={styles.container1}>

                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Text
                    style={styles.title}
                >Préseeeeente toi ! </Text>
                <TextInput
                    placeholder="Pseudo ou mail"
                    style={styles.input}
                    onChangeText={this.onChangePseudo}
                    value={this.state.pseudo}

                />
                <TextInput
                    placeholder="Mot de passe"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={this.onChangePassword}
                    value={this.state.password}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signin.bind(this)}>
                    <Text style={styles.button_text}> VALIDER </Text>
                </TouchableOpacity>

                <Text
                    style={styles.text}
                    onPress={this.register}>
                    Inscrivez-vous !
                </Text>

                <Text
                    style={styles.text}>
                    Mot de passe oublié ?
                </Text>

            </View>
        );



    }

    register() {
        Actions.replace("register");
    }

    onChangePseudo = (pseudo) => {
        this.setState({pseudo})
    };

    onChangePassword = (password) => {
        this.setState({password})
    };

    signin() {
        //console.log(this.state.pseudo + "   " + this.state.password)
        if (this.state.pseudo.length < 1 || this.state.password.length < 1) {
            ToastAndroid.showWithGravity(
                'remp bien',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return
        }
        axios.post('http://10.0.2.2:8080/login', {
            email: this.state.pseudo,
            password: this.state.password
        }).then(response => {
            let obj = response.data;
            let boolValue = JSON.parse(obj["success"]);
            if (boolValue) {
                let head = response.headers["set-cookie"][0];
                let header = head.split(";");
                //console.log(JSON.stringify(response.data));
                //console.log('ok goooo ...');
                let id = obj["data"]["id"];
                let email = obj["data"]["email"];
                let pseudo = obj["data"]["pseudo"];
                let password = obj["data"]["password"];
                //console.log(header[0]);
                //console.log(id);
                //console.log(email);
                //console.log(pseudo);
                //console.log(password);
                AsyncStorage.setItem('id', id, () => {
                    AsyncStorage.mergeItem('id', id)
                });
                AsyncStorage.setItem('email', email, () => {
                    AsyncStorage.mergeItem('email', email)
                });
                AsyncStorage.setItem('pseudo', pseudo, () => {
                    AsyncStorage.mergeItem('pseudo', pseudo)
                });
                AsyncStorage.setItem('password', password, () => {
                    AsyncStorage.mergeItem('password', password)
                });
                AsyncStorage.setItem('header', header[0], () => {
                    AsyncStorage.mergeItem('header', header[0])
                });
                AsyncStorage.setItem('user', JSON.stringify(obj), () => {
                    AsyncStorage.mergeItem('user', JSON.stringify(obj))
                });
                Actions.replace("home");
            }
            else {
                console.log('no  ' + obj["message"]);
            }

        }).catch(error => {
            console.log("no : " + error);
        })
    }
}

const styles = StyleSheet.create({
    container1: {
      alignItems:'center',
        flex:1
    },
    input: {
        height: 40,
        width:300,
        marginTop: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    title: {
        color:"#fff",
        marginTop:175,
        marginBottom:50,
        textAlign:'center'
    },
    text: {
        textAlign:"center",
        marginTop:25,
        marginBottom:10,
        color:"#fbb448",
        textDecorationLine:'underline'
    },
    button_text: {
        marginTop:20,
        textAlign:"center",
        color: "#fff"
    },
    facebook: {
        color:"#fbb448",
        position:"absolute",
        textDecorationLine:"underline",
        bottom:0,
        left:25
    },
    contact: {
        color:"#fbb448",
        position:"absolute",
        textDecorationLine:"underline",
        bottom:0,
        right:25
    }

});

export default Login