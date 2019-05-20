import React , { Component } from 'react';
import Toast, {DURATION} from 'react-native-easy-toast'



import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ToastAndroid
} from 'react-native';
import wallpaper from "../../img/wallpaper.jpg";
import { Actions } from "react-native-router-flux";
import axios from "axios";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pseudo: '',
            password: '',
            password_conf: ''
        };
    };
    render() {
        return (
            <View style={styles.container2}>
                <Toast ref="toast" style={styles.toast} textStyle={{color:'white'}}/>
                <Toast ref="toasts" style={styles.toasts} textStyle={{color:'white'}}/>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>

                <Text style={styles.header}>Inscription :</Text>
                <View style={styles.background}>
                    <View style={styles.buttonFacebook}>
                        <TouchableOpacity>
                            <Text style={styles.text}>
                                LOGIN WITH FACEBOOK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>

                        <TextInput style={styles.textinput} placeholder="Email" onChangeText={this.onChangeEmail} value={this.state.email}/>
                        <TextInput style={styles.textinput} placeholder="Pseudo" onChangeText={this.onChangePseudo} value={this.state.pseudo}/>
                        <TextInput style={styles.textinput} placeholder="Mot de passe" secureTextEntry={true} onChangeText={this.onChangePassword} value={this.state.password}/>
                        <TextInput style={styles.textinput} placeholder="Confirmer le mot de passe"
                                   secureTextEntry={true} onChangeText={this.onChangePassword_conf} value={this.state.password_conf} />


                    </View>
                    <View style={styles.buttonValider}>
                        <TouchableOpacity>
                            <Text style={styles.text} onPress={this.incription.bind(this)}>
                                VALIDER
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={styles.textsign}
                        onPress={this.register}>
                        Déjà-inscrit ?
                    </Text>
                </View>
            </View>

        );
    }

    onChangeEmail = (email) => {
        this.setState({email})
    };
    onChangePseudo = (pseudo) => {
        this.setState({pseudo})
    };

    onChangePassword = (password) => {
        this.setState({password})
    };

    onChangePassword_conf = (password_conf) => {
        this.setState({password_conf})
    };

    register(){
        Actions.replace("login");
    }

    incription() {
        let mdpcompare = this.state.password.localeCompare(this.state.password_conf);
        if (this.state.email.length < 1 || this.state.pseudo.length < 1|| this.state.password.length < 1|| this.state.password_conf.length < 1) {
            ToastAndroid.showWithGravity(
                'remp bien',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return
        }else if (mdpcompare != 0) {
            ToastAndroid.showWithGravity(
                'mdp pas la meme',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return
        }

        axios.post('http://10.0.2.2:8080/signup?gameType=Urbanfoor', {
            pseudo: this.state.pseudo,
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            let obj = response.data;
            let boolValue = JSON.parse(obj["success"]);
            if (boolValue) {
                this.refs.toasts.show('Inscription réussie, vous allez être redirigé ..');
                Actions.replace("login");
            }
            else {
                this.refs.toast.show(obj["message"]);
            }
        }).catch(error => {
            console.log("no : " + error);
        })
    }

}


    const styles = StyleSheet.create({
        container2: {
          alignItems:'center',
            flex:1
        },
        header: {
            fontSize : 40,
            color: '#fff',
            marginTop: 100,
            paddingBottom: 10,
            marginBottom: 10,
            borderBottomColor: '#fbb448',
            borderBottomWidth: 1.5,
        },
        form: {
            marginTop: 5,
        },
        textinput: {
            alignSelf: 'stretch',
            height: 40,
            marginTop: 30,
            color: '#fff',
            borderBottomColor: '#f8f8f8',
            borderBottomWidth: 1,
        },
        buttonValider: {
            alignSelf: 'stretch',
            marginBottom: 30,
            width: 260,
            marginTop: 30,
            alignItems: 'center',
            backgroundColor: '#fbb448'
        },
        text: {
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
            color: '#fff',
            justifyContent: 'center',
        },
        buttonFacebook: {
            alignSelf: 'stretch',
            marginBottom: 20,
            width: 260,
            marginTop: 30,
            alignItems: 'center',
            backgroundColor: '#446DC5'
        },
        textsign: {
            textAlign:"center",
            marginTop:25,
            marginBottom:10,
            color:"#fbb448",
            textDecorationLine:'underline'
        },
        toast: {
            backgroundColor:'red'
        },
        toasts: {
            backgroundColor:'#47a010'
        }
});

export default Register