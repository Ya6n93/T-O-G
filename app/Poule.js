import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import wallpaper from "../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";


export default class Ligues extends React.Component {
    constructor(props){
        super(props);

        this.array = [];

        this.state = {
            date:"",
            date2:"",
            nom:"",
            arrayHolder: []
        };
        this.joinData();
    }

    componentDidMount() {
        this.setState({ arrayHolder: [...this.array] })
    }

    joinData = () => {

        let listLeague = {};

        AsyncStorage.getItem('user', (err, getUser) => {
            listLeague = JSON.parse(getUser)["data"]["leagueMemberships"];

            for (let i = 0; i  < listLeague.length; ++i) {
                let league = listLeague[i]["league"];
                this.array.push({name : league["name"]}, {id: league["id"]}, {seasons: [league["seasons"]]});
            }
            this.setState({ arrayHolder: [...this.array] })
        });
    };

    GetItem(item) {
        AsyncStorage.setItem('ligue', JSON.stringify(item), (err, get) => {
            AsyncStorage.mergeItem('ligue', JSON.stringify(item), (err, get) => {
                Actions.refresh();
                Actions.replace("liguenav");
            });
        });
    }

    accueil() {
        Actions.replace("home");
    }

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <Ionicons style={{position:'absolute', top:20, left:15}} name="md-home" size={40} color="white" onPress={this.accueil}/>

                <View style={styles.background}></View>

                <Text style = {styles.text}>
                    Ligues
                </Text>

                <Text style={styles.phrase}>
                    {"Bah t'es un pleutre ? T'attends quoi \npour te lancer dans une ligue ?"}
                </Text>

                <FlatList

                    data={this.state.arrayHolder}

                    width='100%'

                    extraData={this.state.arrayHolder}

                    keyExtractor={(index) => index.toString()}


                    renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item)} > {item.name} </Text>}
                />


                <View style={styles.button}>

                    <TouchableOpacity
                    onPress={this.createLeague}>
                        <Text style = {styles.textbutton}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    createLeague() {
        Actions.replace("createleague");
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
        width: 80,
        marginTop: 60,
        color: '#fff',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        backgroundColor:'#FBB448',
        borderRadius:50,
    },
    text: {
        marginTop:'50%',
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
    },
    textbutton:{
        alignItems: "center",
        fontSize: 70,
        color: '#fff',
        paddingTop: 9.5,
        marginBottom: 20
    },
    background: {
        marginTop:'50%',
        backgroundColor: '#000',
        alignItems: "center",
        width: 370,
        height: 320,
        borderRadius: 10,
        opacity: 0.6,
        position: "absolute"
    },
    phrase: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#488ffb',
    },
    item: {
        color: 'white'
    },
});