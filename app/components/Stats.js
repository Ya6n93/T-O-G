import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Stats extends React.Component {

    render() {
        return (
                <View style={styles.navbottom}>
                    <TouchableOpacity>
                        <Text style={styles.buttonbottom}  onPress={this.first.bind(this)}>
                            CV
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonbottom}  onPress={this.second.bind(this)}>
                            Bromance
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonbottom} onPress={this.third.bind(this)}>
                            Palmarès
                        </Text>
                    </TouchableOpacity>
                </View>
        );
    }

    first() {
        Actions.replace("cv");

    }

    second() {
        Actions.replace("bromance");

    }

    third() {
        Actions.replace("palmares");
    }

}

const styles = StyleSheet.create({
    buttonbottom: {
        textAlign:'center',
        backgroundColor:'#000',
        color:'#fbb448',
        height:'100%',
        paddingLeft:40,
        paddingRight:50,
        marginBottom:30,
        width:'100%',
        paddingTop:30,
        borderRightWidth:1,
        borderColor:'#fbb448'
    },
    navbottom: {
        width:'100%',
        position:'absolute',
        bottom:0,
        flexDirection: 'row'

    }
});


export default Stats;