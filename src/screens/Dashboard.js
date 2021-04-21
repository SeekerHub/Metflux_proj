import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo_page'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {View, StyleSheet} from 'react-native'
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
import TextInput from '../components/TextInput'

const Dashboard = ({ navigation }) => {
  const [text, setText] = useState('');
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
  <Background>
    <View style = {styles.logo}><Logo /></View>
    <Header style={{ fontFamily: 'Ubuntu_500Medium', fontSize : 45, right : -10, top : -70}}>Welcome ! </Header>
      <TextInput
      placeholder = "Enter Your Name"
      label="Enter Your Name"
      value={text}
      onChangeText={text => setText(text)}

    />
    <Button mode="contained" onPress={() => navigation.navigate('Photo')}>
      Lets Begin
    </Button>


  </Background>
  )
}

const styles = StyleSheet.create({
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },

});

export default Dashboard
