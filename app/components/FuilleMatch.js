import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TextInput,
    Button,
    AppRegistry,
    Alert,
    ImageBackground, Animated, TouchableOpacity, FlatList, Linking, Dimensions, ScrollView, AsyncStorage
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux';


const {height,width} = Dimensions.get("window");

export default class FuilleMatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tournoiVisible:false,
            ligueVisible:false,
            bg: 'brown',
            animation: new Animated.Value(-1 * height),
            checkbox1:false,
            checkbox2:false,
            checkbox3:false,
            status:false,
            infos:'Non',
            ok: '',
            jeuchoice:''
        };

        this.go();
    }

    go = () => {
        AsyncStorage.getItem('game', (error, getGame) => {
            this.setState({jeuchoice: getGame});
        });
    }

    state={
        one:false,
        two:false,
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

    accueil() {
        Actions.replace("home");
    }


    render() {
        const {animation} = this.state
        return (
            <View style={styles.container}>

                { this.state.jeuchoice === 'URBANFOOT' ? <View style={styles.container}>

                    <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>

                    <Animated.View style= {[{position:'absolute', bottom:animation, alignSelf:'center', zIndex:2, backgroundColor:'#000', opacity: 0.9, fontSize: 25, color: "#000", textAlign: 'center', width:'100%', height:250}]}>
                        <TouchableOpacity onPress={() => {
                            this._animation2()
                        }}>
                            <Text style = {{fontSize: 20, textAlign: 'right', backgroundColor: '#000', color: '#FBB448', marginBottom: 10}}>
                                X
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            style={{color:'white', borderBottomColor: '#FBB448', borderBottomWidth: 3, width: 250, textAlign: 'center', marginLeft: '18%', marginBottom: 10}}
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

                    <View style={{flexDirection:'row'}}>
                        <CircleCheckBox
                            checked={this.state.checkbox1}
                            onToggle={() => this.openDiv()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Tournoi"
                            styleLabel={{color:'white'}}
                        />
                        <CircleCheckBox
                            checked={this.state.checkbox2}
                            onToggle={() => this.openDiv2()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Ligue"
                            styleLabel={{color:'white'}}
                        />
                        <CircleCheckBox
                            checked={this.state.checkbox3}
                            onToggle={() => this.openDiv3()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Tournoi/Ligue"
                            styleLabel={{color:'white'}}
                        />
                    </View>
                    <View>
                        {
                            this.state.checkbox1 === true ? <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize:25, color:'#fff'}}>Tournoi</Text>
                                <TouchableOpacity onPress={() => {
                                    this._animation()}}>
                                    <Text style={styles.textinput2}>Tournoi</Text>
                                </TouchableOpacity>
                                <TextInput style={styles.textinput2} placeholder="Tag" value={this.state.ok}/>
                                <Text style={{color:'white'}}>Finale {"\n"}</Text>
                                <ToggleSwitch
                                    isOn={this.state.status}
                                    onColor='#488ffb'
                                    offColor='#bdbdbd'
                                    label={this.state.infos}
                                    size='little'
                                    labelStyle={{color:'white'}}
                                    onToggle={ this.test.bind(this)}
                                />

                            </View> : null
                        }
                        {
                            this.state.checkbox2 === true ? <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize:25, color:'#fff'}}>Ligue</Text>
                                <TouchableOpacity  onPress={() => {
                                    this._animation()}}>
                                    <Text style={styles.textinput2}>Ligue</Text>
                                </TouchableOpacity>
                            </View> : null
                        }
                        {
                            this.state.checkbox3 === true ? <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{marginRight:'25%'}}>
                                    <Text style={{fontSize:25, color:'#fff'}}>Tournoi</Text>
                                    <TouchableOpacity  onPress={() => {
                                        this._animation()}}>
                                        <Text style={styles.textinput2}>Tournoi</Text>
                                    </TouchableOpacity>
                                    <TextInput style={styles.textinput2} placeholder="Tag" value={this.state.ok}/>
                                    <Text style={{color:'white'}}>Finale {"\n"}</Text>
                                    <ToggleSwitch
                                        isOn={this.state.status}
                                        onColor='#488ffb'
                                        offColor='#bdbdbd'
                                        label={this.state.infos}
                                        size='little'
                                        labelStyle={{color:'white'}}
                                        onToggle={ this.test.bind(this)}
                                    /></View>
                                <View>
                                    <Text style={{fontSize:25, color:'#fff'}}>Ligue</Text>
                                    <TouchableOpacity  onPress={() => {
                                        this._animation()}}>
                                        <Text style={styles.textinput2}>Ligue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> : null
                        }
                    </View>

                    <View style={styles.button}>

                        <TouchableOpacity onPress={() => {
                            console.log(this.state);
                        }}>
                            <Text style = {styles.textbutton}>
                                VALIDER
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.accueil}>
                            <Text style = {styles.textbutton}>
                                ACCUEIL
                            </Text>
                        </TouchableOpacity>

                        <Text style={{color:'white', fontSize:25}}>MATCHS</Text>

                        <Text style={styles.phrase}>
                            {"Bah y a rien à montrer p'tit chat, t'attends quoi pour rentrer une feuille de match ?"}
                        </Text>

                    </View>

                </View> : <View style={styles.container}>

                    <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>

                    <Animated.View style= {[{position:'absolute', bottom:animation, alignSelf:'center', zIndex:2, backgroundColor:'#000', opacity: 0.9, fontSize: 25, color: "#000", textAlign: 'center', width:'100%', height:250}]}>
                        <TouchableOpacity onPress={() => {
                            this._animation2()
                        }}>
                            <Text style = {{fontSize: 20, textAlign: 'right', backgroundColor: '#000', color: '#FBB448', marginBottom: 10}}>
                                X
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            style={{color:'white', borderBottomColor: '#FBB448', borderBottomWidth: 3, width: 250, textAlign: 'center', marginLeft: '18%', marginBottom: 10}}
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

                    <View style={{flexDirection:'row'}}>
                        <CircleCheckBox
                            checked={this.state.checkbox1}
                            onToggle={() => this.openDiv()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Tournoi"
                            styleLabel={{color:'white'}}
                        />
                        <CircleCheckBox
                            checked={this.state.checkbox2}
                            onToggle={() => this.openDiv2()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Ligue"
                            styleLabel={{color:'white'}}
                        />
                        <CircleCheckBox
                            checked={this.state.checkbox3}
                            onToggle={() => this.openDiv3()}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Tournoi/Ligue"
                            styleLabel={{color:'white'}}
                        />
                    </View>
                    <View>
                        {
                            this.state.checkbox1 === true ? <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize:25, color:'#fff'}}>Tournoi</Text>
                                <TouchableOpacity onPress={() => {
                                    this._animation()}}>
                                    <Text style={styles.textinput2}>Tournoi</Text>
                                </TouchableOpacity>
                                <TextInput style={styles.textinput2} placeholder="Tag" value={this.state.ok}/>
                                <Text style={{color:'white'}}>Finale {"\n"}</Text>
                                <ToggleSwitch
                                    isOn={this.state.status}
                                    onColor='#488ffb'
                                    offColor='#bdbdbd'
                                    label={this.state.infos}
                                    size='little'
                                    labelStyle={{color:'white'}}
                                    onToggle={ this.test.bind(this)}
                                />

                            </View> : null
                        }
                        {
                            this.state.checkbox2 === true ? <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize:25, color:'#fff'}}>Ligue</Text>
                                <TouchableOpacity  onPress={() => {
                                    this._animation()}}>
                                    <Text style={styles.textinput2}>Ligue</Text>
                                </TouchableOpacity>
                            </View> : null
                        }
                        {
                            this.state.checkbox3 === true ? <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{marginRight:'25%'}}>
                                    <Text style={{fontSize:25, color:'#fff'}}>Tournoi</Text>
                                    <TouchableOpacity  onPress={() => {
                                        this._animation()}}>
                                        <Text style={styles.textinput2}>Tournoi</Text>
                                    </TouchableOpacity>
                                    <TextInput style={styles.textinput2} placeholder="Tag" value={this.state.ok}/>
                                    <Text style={{color:'white'}}>Finale {"\n"}</Text>
                                    <ToggleSwitch
                                        isOn={this.state.status}
                                        onColor='#488ffb'
                                        offColor='#bdbdbd'
                                        label={this.state.infos}
                                        size='little'
                                        labelStyle={{color:'white'}}
                                        onToggle={ this.test.bind(this)}
                                    /></View>
                                <View>
                                    <Text style={{fontSize:25, color:'#fff'}}>Ligue</Text>
                                    <TouchableOpacity  onPress={() => {
                                        this._animation()}}>
                                        <Text style={styles.textinput2}>Ligue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> : null
                        }
                    </View>

                    <View style={styles.button}>

                        <TouchableOpacity onPress={() => {
                            console.log(this.state);
                        }}>
                            <Text style = {styles.textbutton}>
                                VALIDER
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.accueil}>
                            <Text style = {styles.textbutton}>
                                ACCUEIL
                            </Text>
                        </TouchableOpacity>

                        <Text style={{color:'white', fontSize:25}}>MATCHS</Text>

                        <Text style={styles.phrase}>
                            {"Bah y a rien à montrer p'tit chat, t'attends quoi pour rentrer une feuille de match ?"}
                        </Text>

                    </View>

                </View>}

            </View>
        );
    }

    openDiv() {
        if (this.state.checkbox1 === false ) {
            this.setState({
                checkbox1: true,
                checkbox2: false,
                checkbox3: false
            });
        } else {
            this.setState({
                checkbox1: false
            });
        }
    }

    openDiv2() {
        if (this.state.checkbox2 === false ) {
            this.setState({
                checkbox1: false,
                checkbox2: true,
                checkbox3: false
            });
        } else {
            this.setState({
                checkbox2: false
            });
        }
    }

    openDiv3() {
        if (this.state.checkbox3 === false ) {
            this.setState({
                checkbox1: false,
                checkbox2: false,
                checkbox3: true
            });
        } else {
            this.setState({
                checkbox3: false
            });
        }
    }

    test() {
        if (this.state.status === false) {
            this.setState({status: true, infos: 'Oui', ok:'Finale'})
        } else {
            this.setState({status: false, infos: 'Non', ok:''})
        }
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
    textinput2: {
        alignSelf: 'stretch',
        height: 40,
        width:'100%',
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        marginBottom:'5%'
    },

});