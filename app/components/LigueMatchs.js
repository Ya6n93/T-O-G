import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Linking,
    Dimensions,
    Animated,
    FlatList,
    ImageBackground, AsyncStorage
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import wallpaper from "../../img/wallpaper.jpg";
import { Actions } from 'react-native-router-flux';

import {Ionicons} from "@expo/vector-icons";

const {height,width} = Dimensions.get("window");

export default class LigueMatchs extends React.Component {
    constructor(props){
        super(props);
        this.array = [],
            this.state = {
                date: new Date(),
                isDialogVisible: false,
                score1: '',
                score2: '',
                gameSelection: 'Jeu',
                divVisible:false,
                animation: new Animated.Value(-1 * height),
                search: '',
                arrayHolder: [],
                textInput_Holder: '',
                ligueName:'Nom de ligue ici',
                jeuvideo: ''
            };

        this.joinData();
        console.log("LIGUEMATCH");
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    };

    joinData = () => {
        AsyncStorage.getItem('game', (error, getGame) => {
            this.setState({jeuvideo: getGame});
            this.setState({ arrayHolder: [...this.array] })
        });
    };

    _animation = () => {
        Animated.timing(this.state.animation, {
            toValue: (((height/2) - 125)),
            duration:1500
        }).start();
    }

    _animation2 = () => {
        Animated.timing(this.state.animation, {
            toValue: (height),
            duration:1500
        }).start();
    }

    componentDidMount() {
        this.setState({ arrayHolder: [...this.array] })
    }

    func_like(data) {
        this.setState({ textInput_Holder: data });


        if (this.state.textInput_Holder.length > 0)
            AsyncStorage.getItem('header', (err, getHeader) => {
                let headers = {
                    'Content-Type': 'application/json',
                    'cookie': getHeader
                };
                axios.get("http://10.0.2.2:8080/user/like/" + this.state.textInput_Holder, {headers: headers}).then(response => {
                    console.log(JSON.stringify(response.data));
                }).catch(error => {
                    console.log("no : " + error);

                });
            });
    }

    render() {
        const {animation} = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                { this.state.jeuvideo === 'URBANFOOT' ?
                    <View style={styles.container}>

                        <Ionicons style={{position:'absolute', top:20, left:15}}name="md-home" size={40} color="white" onPress={this.accueil}/>

                        <Animated.View style= {[{position:'absolute', bottom:animation, alignSelf:'center', zIndex:2, backgroundColor:'#000', opacity: 0.9, fontSize: 25, color: "#000", textAlign: 'center', width:'100%', height:250}]}>
                            <TouchableOpacity onPress={() => {
                                this._animation2()
                            }}>
                                <Text style = {{fontSize: 20, textAlign: 'right', backgroundColor: '#000', color: '#FBB448', marginBottom: 10}}>
                                    X
                                </Text>
                            </TouchableOpacity>
                            <Text style={{color: 'white', textAlign: 'center', fontSize: 25}}>Choisissez un challenger</Text>
                            <TextInput
                                style={{borderBottomColor: '#FBB448', borderBottomWidth: 3, width: 250, textAlign: 'center', marginLeft: '18%', marginBottom: 10}}
                                placeholder="Rechercher :"
                                onChangeText={data => this.func_like.bind(this, data)/*this.setState({ textInput_Holder: data })*/} />

                            <FlatList

                                data={this.state.arrayHolder}

                                width='100%'

                                extraData={this.state.arrayHolder}

                                keyExtractor={(index) => index.toString()}

                                ItemSeparatorComponent={this.FlatListItemSeparator}

                                renderItem={({ item }) =>
                                    <TouchableOpacity>
                                        <Text style={{color:'white', textAlign:'center'}}>{item.title}</Text>
                                    </TouchableOpacity>}
                            />

                            <TouchableOpacity onPress={() => {
                                console.log(this.state.search);
                            }}>
                                <Text style = {{alignSelf: "stretch", fontSize: 15, textAlign: 'center', backgroundColor: '#000', color: '#fff', marginBottom: 10}}>
                                    INVITER JOUEUR
                                </Text>
                            </TouchableOpacity>

                        </Animated.View>

                        <View style={styles.background}></View>

                        <Text style = {styles.text}>
                            Nouveau Match ?
                        </Text>

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
                        <View style={styles.lol}>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1} >
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={styles.score}>
                            <TextInput
                                style={styles.textinput}
                                placeholder="Score1"
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({score1: text})} />
                            <TextInput
                                style={styles.textinput}
                                placeholder="Score2"
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({score2: text})} />
                        </View>
                        <Text style = {styles.text2}>
                            LIGUE :
                        </Text>

                        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://google.com') } >{this.state.ligueName}</Text>

                        <View style={styles.button}>

                            <TouchableOpacity onPress={() => {
                                console.log(this.state);
                            }}>
                                <Text style = {styles.textbutton}>
                                    VALIDER
                                </Text>
                            </TouchableOpacity>

                            <Text style={styles.phrase}>
                                {"Bah y a rien à montrer p'tit chat, t'attends quoi pour rentrer une feuille de match ?"}
                            </Text>

                            <TouchableOpacity onPress={() => {
                                console.log(this.state);
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
                    </View> : <View style={styles.container}>


                        <Animated.View style= {[{position:'absolute', bottom:animation, alignSelf:'center', zIndex:2, backgroundColor:'#000', opacity: 0.9, fontSize: 25, color: "#000", textAlign: 'center', width:'100%', height:250}]}>
                            <TouchableOpacity onPress={() => {
                                this._animation2()
                            }}>
                                <Text style = {{fontSize: 20, textAlign: 'right', backgroundColor: '#000', color: '#FBB448', marginBottom: 10}}>
                                    X
                                </Text>
                            </TouchableOpacity>
                            <Text style={{color: '#fff', textAlign: 'center', fontSize: 25}}>Choisissez un challenger</Text>
                            <TextInput
                                style={{borderBottomColor: '#FBB448', borderBottomWidth: 3, width: 250, textAlign: 'center', marginLeft: '18%', marginBottom: 10}}
                                placeholder="Rechercher :"
                                onChangeText={data => this.setState({ textInput_Holder: data })} />
                            <FlatList

                                data={this.state.arrayHolder}

                                width='100%'

                                extraData={this.state.arrayHolder}

                                keyExtractor={(index) => index.toString()}

                                ItemSeparatorComponent={this.FlatListItemSeparator}

                                renderItem={({ item }) =>
                                    <TouchableOpacity>
                                        <Text style={{color:'white', textAlign:'center'}}>{item.title}</Text>
                                    </TouchableOpacity>}
                            />

                            <TouchableOpacity onPress={() => {
                                console.log(this.state.search);
                            }}>
                                <Text style = {{alignSelf: "stretch", fontSize: 15, textAlign: 'center', backgroundColor: '#000', color: '#fff', marginBottom: 10}}>
                                    INVITER JOUEUR
                                </Text>
                            </TouchableOpacity>

                        </Animated.View>

                        <View style={styles.background}></View>

                        <Text style = {styles.text}>
                            Nouveau Match ?
                        </Text>

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
                        <View style={styles.lol}>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe1}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.equipe2}>
                                <TouchableOpacity onPress={() => {
                                    this._animation()
                                }}>
                                    <Text style = {styles.textbutton1}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={styles.score}>
                            <TextInput value={this.state.score1}
                                       style={styles.textinput}
                                       placeholder="Score1"
                                       keyboardType='numeric'
                                       onChangeText={(text) => this.setState({nom: text})} />
                            <TextInput value={this.state.score2}
                                       style={styles.textinput}
                                       placeholder="Score2"
                                       keyboardType='numeric'
                                       onChangeText={(text) => this.setState({nom: text})} />
                        </View>

                        <View style={styles.button}>

                            <TouchableOpacity onPress={() => {
                                console.log(this.state);
                            }}>
                                <Text style = {styles.textbutton}>
                                    VALIDER
                                </Text>
                            </TouchableOpacity>

                            <Text style={styles.phrase}>
                                {"Bah y a rien à montrer p'tit chat, t'attends quoi pour rentrer une feuille de match ?"}
                            </Text>

                            <TouchableOpacity onPress={() => {
                                console.log(this.state);
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
                    </View>}

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
        zIndex:1,
        alignItems:'center'
    },

    text2: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
    },

    phrase: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center',
        color: '#488ffb',
    },

    button: {
        textAlign: 'center',
        marginBottom: 40,
        width: 260,
        marginTop: 30,
        alignItems: 'center',
        color: '#fff',
    },
    text: {
        marginTop:'50%',
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
    textbutton:{
        alignItems: "center",
        fontSize: 15,
        width:80,
        textAlign: 'center',
        height: 20,
        backgroundColor: '#000',
        color: '#fff',
        marginBottom: 10
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
        width: 60,
        marginLeft: 65,
        marginRight: 72,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    textbutton1:{
        alignItems: "center",
        fontSize: 20,
        color: '#fff',
        paddingTop: 17,
        marginBottom: 20
    },
    equipe1: {
        textAlign: 'center',
        marginBottom: 20,
        width: 35,
        color: '#fff',
        alignItems:'center',
        justifyContent:'center',
        height:35,
        backgroundColor:'#FBB448',
        borderRadius:50,
    },
    equipe2: {
        textAlign: 'center',
        marginBottom: 20,
        width: 35,
        color: '#fff',
        alignItems:'center',
        justifyContent:'center',
        height:35,
        backgroundColor:'#488ffb',
        borderRadius:50,
    },
    lol: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    score:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    TextStyle: {
        color: '#FBB448',
        textDecorationLine: 'underline'
    },

});