import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

function About(props) {
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium

  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/back.png")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect2}>
            <Text style={styles.alphaVersion10}>Alpha Version 1.0</Text>
            <Text style={styles.alphaVersion11}>Created by Team Instincts</Text>
          </View>
        </ImageBackground>
        <View style={styles.rect1}>
          <Text style={styles.text}>About</Text>
        </View>
        <Image
          source={require("../assets/images/temp6.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 160,
    left: 7,
    width: '100%',
    height: 663,
    position: "absolute"
  },
  image1_imageStyle: {},
  rect2: {
    width: 312,
    height: 370,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    marginTop: 230,
    left : 38
  },
  alphaVersion10: {
    fontFamily: "Ubuntu_500Medium",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 37,
    marginLeft: 17
  },
  alphaVersion11: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 18,
    marginTop: 25,
    marginLeft: 17
  },
  rect1: {
    top: 0,
    left: -1,
    width: 443,
    height: 349,
    position: "absolute",
    backgroundColor: "rgba(21,31,43,1)"
  },
  text: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    marginTop: 289,
    marginLeft: 39
  },
  image2: {
    top: 37,
    left: 56,
    width: 369,
    height: 313,
    position: "absolute",
    opacity: 0.5
  },
  image1Stack: {
    width: 443,
    height: 823,
    marginTop: -11,
    marginLeft: -7
  }
});

export default About;
