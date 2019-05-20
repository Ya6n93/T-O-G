import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import wallpaper from './img/wallpaper.jpg';
import Navigation from './app/components/Navigation';
import Footer from "./app/components/Footer";
const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
        <View
            style={styles.container}>

            <Navigation/>
        </View>
    )
  }
}