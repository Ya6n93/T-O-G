import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import { Actions } from 'react-native-router-flux'

export default class LigueClassement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:"",
            date2:"",
            nom:"",
            ligueName:""
        };

        this.setall();
        console.log("stp wsh --------------------------------------" +
            "----------------------------------------------------------" +
            "---------------------------------------------------------");
    }
    setall() {

        AsyncStorage.getItem('ligue', (err, getLeague) => {
            console.log(getLeague);
            this.setState({ligueName:JSON.parse(getLeague)['name']})

        });
        //this.setState({ligueName:this.props.text})
    }
    render() {
        return (

            <View style={styles.container}>

                <View style={styles.background}></View>

                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>

                <Text style = {styles.text}>
                    {this.state.ligueName}
                </Text>

                <Text style={styles.phrase}>
                    {"Circulez, y a rien à voir !"}
                </Text>

                <View style={styles.button}>

                    <TouchableOpacity onPress={() => {
                        Actions.replace("ligues");
                    }}>
                        <Text style = {styles.textbutton}>
                            AUTRES LIGUES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.replace("home")}>
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

    phrase: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#488ffb',
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