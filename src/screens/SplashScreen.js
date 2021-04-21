import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../components/Logo';

const SplashScreen = ({navigation}) =>{

    setTimeout(() => {
        navigation.replace('Dashboard');
    },2000);
    return (
        <ImageBackground style={{flex:1}} source={require('../assets/splash_b.png')}>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  logo: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }
});

export default SplashScreen;
