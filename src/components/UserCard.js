import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

const UserCard = (props) => {
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <View style={styles.bhaveshGandhiColumn}>
            <Text style={styles.bhaveshGandhi}>Bhavesh Gandhi</Text>
            <Text style={styles.user}>User</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/ntorq.png")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
        <Text style={styles.modelTvsNtorq}>
          Model : TVS Ntorq (Race Edition)
        </Text>
        <View style={styles.manufacture2019Stack}>
          <Text style={styles.manufacture2019}>Manufacture : 2019</Text>
          <Text style={styles.loremIpsum}></Text>
        </View>
        <View style={styles.manufacture2020Row}>
          <Text style={styles.manufacture2020}></Text>
          <Text style={styles.manufacture2021}>Year Of Purchase : 2020</Text>
        </View>
        <Text style={styles.mIlage47KmL}>MIlage : 47 km/l</Text>
        <View style={styles.status2Row}>
          <Text style={styles.status2}>Status :</Text>
          <Text style={styles.verified}>Verified</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    width: 317,
    height: 432,
    borderWidth: 1,
    borderColor: "rgba(211,210,210,1)",
    borderRadius: 17,
    backgroundColor: "rgba(28,42,56,1)",
  },
  image: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderColor: "rgba(184,178,178,1)",
    borderRadius: 100,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  bhaveshGandhi: {
    fontFamily: "Ubuntu_500Medium",
    color: "rgba(247,246,237,1)",
    fontSize: 20
  },
  user: {
    fontFamily: "Ubuntu_500Medium",
    color: "rgba(251,251,250,1)"
  },
  bhaveshGandhiColumn: {
    width: 148,
    marginLeft: 32,
    marginTop: 7,
    marginBottom: 15
  },
  imageRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 67
  },
  image2: {
    width: 296,
    height: 195,
    borderRadius: 21,
    backgroundColor: "rgba(210,78,78,0.39)",
    marginTop: 11,
    marginLeft: 10
  },
  modelTvsNtorq: {
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(236,236,243,1)",
    marginTop: 16,
    marginLeft: 28
  },
  manufacture2019: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(237,223,223,1)"
  },
  loremIpsum: {
    top: 9,
    left: 74,
    position: "absolute",
    fontFamily: "Ubuntu_700Bold",
    color: "#121212"
  },
  manufacture2019Stack: {
    width: 128,
    height: 16,
    marginTop: 10,
    marginLeft: 28
  },
  manufacture2020: {
    fontFamily: "Ubuntu_700Bold",
    color: "#121212",
    marginTop: 8
  },
  manufacture2021: {
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(243,236,236,1)",
    marginLeft: 20
  },
  manufacture2020Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 133
  },
  mIlage47KmL: {
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(235,201,201,1)",
    marginTop: 8,
    marginLeft: 29
  },
  status2: {
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(255,255,255,1)"
  },
  verified: {
    fontFamily: "Ubuntu_700Bold",
    color: "rgba(92,164,86,1)",
    fontSize: 15,
    marginLeft: 4
  },
  status2Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 28,
    marginRight: 177
  }
});

export default UserCard;
