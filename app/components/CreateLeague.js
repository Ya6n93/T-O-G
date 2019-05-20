import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import wallpaper from "../../img/wallpaper.jpg";
import axios from "axios";



export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:"",
            date2:"",
            nom:""
        }
    }
    createLeague() {
        let nom = this.state.nom;
        let dD = new Date(this.state.date);
        let dF = new Date(this.state.date2);
        console.log(nom);
        console.log(dD);
        console.log(dF);
        let seas = {endDate: dF, startDate: dD};
        let date = [];
        date[0] = seas;
        let obj = {name: nom, seasons : date};
        AsyncStorage.getItem('header', (err, getHeader) => {
            let headers = {
                'Content-Type': 'application/json',
                'cookie': getHeader
            };

            axios.post('http://10.0.2.2:8080/league?gameType=URBAN', obj, {headers: headers}).then(response => {
                let obj = response.data;
                let leagueNew = obj["data"];
                let boolValue = JSON.parse(obj["success"]);
                let nLeague = {
                    admin: true,
                    id: leagueNew["id"],
                    league: leagueNew
                };

                if (boolValue) {
                    AsyncStorage.getItem('id', (err, getId) => {
                        axios.get("http://10.0.2.2:8080/user?id=" + getId).then(response => {
                            AsyncStorage.mergeItem('user', JSON.stringify(response.data), (err, get) => {

                                AsyncStorage.setItem('ligue', JSON.stringify(leagueNew), (err, get) => {
                                    AsyncStorage.mergeItem('ligue', JSON.stringify(leagueNew), (err, get) => {
                                        Actions.refresh();
                                        Actions.replace("liguenav");
                                    });

                                });
                            });

                        }).catch(error => {
                            console.log("no : " + error);

                        });
                    });

                    /*AsyncStorage.getItem('user', (err, getUser) => {
                        let u = JSON.parse(getUser);
                        let nb = u["data"]["leagueMemberships"].length;
                        u["data"]["leagueMemberships"][nb] = nLeague;
                        console.log(JSON.stringify(u["data"]["leagueMemberships"]) + "    " + nb);
                        AsyncStorage.setItem('user', JSON.stringify(u), () => {
                            AsyncStorage.mergeItem('user', JSON.stringify(u));
                        });
                    });*/
                 }
                else {
                    console.log(obj["message"]);
                }
            }).catch(error => {
                console.log("no : " + error);
            })
        });
    }

    render() {
        return (

            <View style={styles.container}>

                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>

                <View style={styles.background}/>

                <Text style = {styles.text}>
                    Crée ta ligue
                </Text>

                <TextInput value={this.state.nom}
                           style={styles.textinput}
                           placeholder="NOM"
                           onChangeText={(text) => this.setState({nom: text})} />

                <DatePicker
                    style={{width: 350, marginBottom: 20}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Date de debut"
                    format="YYYY-MM-DD"
                    minDate={new Date()}
                    maxDate="2025-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                            marginLeft: 36,
                            color: '#FBB448'
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />

                <DatePicker
                    style={{width: 350, borderColor: '#FBB448'}}
                    date={this.state.date2}
                    mode="date"
                    placeholder="Date de fin"
                    format="YYYY-MM-DD"
                    minDate={new Date()}
                    maxDate="2025-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                            marginLeft: 36,
                            color: '#FBB448'
                        }
                    }}
                    onDateChange={(date) => {this.setState({date2: date})}}
                />

                <View style={styles.button}>

                    <TouchableOpacity onPress={this.createLeague.bind(this)}>
                        <Text style = {styles.textbutton}>
                            VALIDER
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.ligue}>
                        <Text style = {styles.textbutton}>
                            LIGUES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.accueil}>
                        <Text style = {styles.textbutton}>
                            ACCUEIL
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

    ligue() {
        console.log("ok");
        Actions.replace("poule");
    }

    accueil() {
        Actions.replace("home");
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex:1
    },

    button: {
        textAlign: 'center',
        //alignSelf: 'stretch',
        marginBottom: 40,
        width: 260,
        marginTop: 30,
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
    textinput: {
        textAlign: 'center',
        alignSelf: 'stretch',
        height: 40,
        marginTop: 40,
        marginLeft: 65,
        marginRight: 72,
        marginBottom: 20,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
});