import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  useFonts,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

function Support(props) {
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/back_t.png")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect2StackStack}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <View style={styles.iconRow}>
                  <Icon name="alert-circle" style={styles.icon}></Icon>
                  <Text style={styles.havingAnyIssues}>Having Any Issues?</Text>
                </View>
              </View>
              <Image
                source={require("../assets/images/temp4.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
            </View>
            <Text style={styles.loremIpsum}></Text>
            <View style={styles.rect3}>
              <View style={styles.image2Stack}>
                <Image
                  source={require("../assets/images/temp1.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Image
                  source={require("../assets/images/temp2.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <Image
                  source={require("../assets/images/temp3.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
              </View>
              <View style={styles.referralsRow}>
                <Text style={styles.referrals}>Referrals</Text>
                <Text style={styles.support4}>Support</Text>
                <Text style={styles.billing}>Billing</Text>
              </View>
            </View>
            <Text style={styles.faQs}>FAQs</Text>
          </View>
        </ImageBackground>
        <View style={styles.rect}>
          <Text style={styles.text}>Support</Text>
        </View>
        <Image
          source={require("../assets/images/temp5.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 160,
    left: 7,
    width: '100%',
    height: 663,
    position: "absolute"
  },
  image_imageStyle: {},
  rect2: {
    top: 16,
    left: 32,
    width: 312,
    height: 139,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,76,76,1)",
    fontSize: 50,
    height: 50,
    width: 50
  },
  havingAnyIssues: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 22,
    marginLeft: 17,
    marginTop: 12
  },
  iconRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 31,
    marginLeft: 28,
    marginTop: 20
  },
  image5: {
    top: 0,
    left: 0,
    width: 375,
    height: 214,
    position: "absolute"
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 214,
    position: "absolute"
  },
  loremIpsum: {
    top: 7,
    left: 49,
    position: "absolute",
    fontFamily: "Ubuntu_400Regular",
    color: "#121212"
  },
  rect3: {
    top: 202,
    left: 32,
    width: 312,
    height: 196,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 25
  },
  image2: {
    top: 30,
    left: 0,
    width: 105,
    height: 100,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 83,
    width: 144,
    height: 126,
    position: "absolute"
  },
  image4: {
    top: 0,
    left: 211,
    width: 92,
    height: 126,
    position: "absolute"
  },
  image2Stack: {
    width: 303,
    height: 130,
    marginTop: 12,
    marginLeft: 2
  },
  referrals: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 16
  },
  support4: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 16,
    marginLeft: 40
  },
  billing: {
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 16,
    marginLeft: 50
  },
  referralsRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 20,
    marginRight: 31
  },
  faQs: {
    top: 169,
    left: 42,
    position: "absolute",
    fontFamily: "Ubuntu_400Regular",
    color: "rgba(21,31,43,1)",
    fontSize: 22
  },
  // Changed
  rect2StackStack: {
    width: 375,
    height: 398,
    marginTop: 208,
    right : -10,

  },
  rect: {
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
  image6: {
    top: 22,
    left: 79,
    width: 343,
    height: 347,
    position: "absolute",
    opacity: 0.5
  },
  imageStack: {
    width: 443,
    height: 823,
    marginTop: -11,
    marginLeft: -7
  }
});

export default Support;
