import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import {Actions} from "react-native-router-flux";


export default class LigueInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date:"",
            date2:"",
            nom:""
        };
        this.setall_info();
    }

    setall_info() {
        AsyncStorage.getItem('ligue', (err, getLeague) => {

            this.setState(
                {
                    nom:JSON.parse(getLeague)['name'],
                    //date:JSON.parse(getLeague)['seasons'][0]['startDate'],
                    //date2:JSON.parse(getLeague)['seasons'][0]['endDate']
                })

        });
    }
    render() {
        return (

            <View style={styles.container}>

                <View style={styles.background}></View>

                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>


                <Text style = {styles.text}>
                    Nom de la ligue
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

                    <TouchableOpacity onPress={() => {
                        console.log(this.state);
                    }}>
                        <Text style = {styles.textbutton}>
                            VALIDER
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                       Actions.replace("ligues");
                    }}>
                        <Text style = {styles.textbutton}>
                            AUTRES LIGUES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.textbutton}>
                            ACCUEIL
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

    accueil() {
        Actions.replace("home");
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
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
        fontSize: 35,
        marginTop:'50%',
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
    nav: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#fbb448',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textnav1: {
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20,
        alignItems: 'center',
        marginTop: 25,
        height: 50,
        opacity: 0.5,
    },
    textnav2: {
        paddingRight: 10,
        color: '#fff',
        fontSize: 20,
        alignItems: 'center',
        marginTop: 25,
        height: 50,
        opacity: 0.5,
    },
    textnav3: {
        paddingRight: 60,
        color: '#fff',
        fontSize: 20,
        alignItems: 'center',
        marginTop: 25,
        height: 50,
        borderBottomWidth: 5,
        borderBottomColor: '#488ffb'
    },
});