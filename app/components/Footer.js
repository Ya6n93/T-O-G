import React , { Component } from 'react';
import {ImageBackground, Linking, StyleSheet, Text, View} from "react-native";
import wallpaper from "../../img/wallpaper.jpg";



export default class Footer extends React.Component {
    render()
    {
    return (
        <View>
        <Text
            style={styles.facebook}
            onPress={() => Linking.openURL('https://www.facebook.com/ThroneOf/')}>
            Facebook
        </Text>

        <Text style={styles.contact}
            onPress={this.handleEmail}>
            contact@throneofgames.fr
        </Text>
        </View>
    );
    }


    handleEmail = () => {
        const to = ['contact@throneofgames.fr']
        email(to, {
            subject: '',
            body: ''
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    facebook: {
        color:"#fbb448",
        position:'absolute',
        bottom:0,
        left:25,
        textDecorationLine:"underline",


    },
    contact: {
        color:"#fbb448",
        position:'absolute',
        textDecorationLine:"underline",
        bottom:0,
        right:25
    }

});