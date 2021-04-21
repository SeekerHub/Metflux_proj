import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';


const Settings = ({ navigation }) => {
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
          <View style={styles.rect1}>
            <View style={styles.iconRow}>
              <FontAwesomeIcon
                name="paint-brush"
                style={styles.icon}
              ></FontAwesomeIcon>
              <Text style={styles.personalization}>Personalization</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.icon2Row}>
              <MaterialCommunityIconsIcon
                name="account"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.account}>Account</Text>
            </View>
          </View>
          <View style={styles.rect4}>
            <View style={styles.icon4Row}>
              <FontAwesomeIcon
                name="support"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <Text style={styles.support}>Support</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.rect2}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <Image
          source={require("../assets/images/temp7.png")}
          resizeMode="contain"
          style={styles.image}
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
    height: '100%',
    position: "absolute"
  },
  image1_imageStyle: {},
  rect1: {
    width: 312,
    height: 84,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    flexDirection: "row",
    marginTop: 248,
    marginLeft: 32
  },
  icon: {
    color: "rgba(21,31,43,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  personalization: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 22,
    marginLeft: 10,
    marginTop: 7
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 94,
    marginLeft: 15,
    marginTop: 22
  },
  rect3: {
    width: 312,
    height: 84,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 32
  },
  icon2: {
    color: "rgba(21,31,43,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  account: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 22,
    marginLeft: 10,
    marginTop: 9
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 166,
    marginLeft: 15,
    marginTop: 20
  },
  rect4: {
    width: 312,
    height: 84,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 32
  },
  icon4: {
    color: "rgba(21,31,43,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  support: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 22,
    marginLeft: 10,
    marginTop: 7
  },
  icon4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 167,
    marginLeft: 15,
    marginTop: 22
  },
  rect2: {
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
  image: {
    top: 42,
    left: 61,
    width: 375,
    height: 308,
    position: "absolute",
    opacity: 0.5
  },
  image1Stack: {
    width: 443,
    height: 823,
    marginTop: -11,
    marginLeft: -1
  }
});

export default Settings;
