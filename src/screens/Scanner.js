import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import Logo from '../components/Logo_page'
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';
import * as FaceDetector from 'expo-face-detector';

const Scanner = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState('/home/droid/Documents/tvs/Test_4/tvsLink/src/assets/images/temp4.png');
  const [text, setText] = useState('');
  const [status, setStatus] = useState(false)
  const [chosen, setChosen] = useState('Please Select an Option');
  const [hasface, sethasface] = useState(false)
  const [fontsLoaded, error] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  })
  const [transX, settransX] = useState(0);
  const [transY, settransY] = useState(0);
  const [boxSize, setBoxSize] = useState({
    height: 0,
    width: 0
  })


  if (!fontsLoaded) {
    return <AppLoading />;
  }



  const detectFaces = async imageUri => {
    const options = { mode: FaceDetector.Constants.Mode.fast };
    return await FaceDetector.detectFacesAsync(imageUri, options);
  };


  const recognizeFromPicker = async () => {

      let permissionResult = await MediaLibrary.requestPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access media is required!');
        return;
      }
      try{
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
          });
        if(!pickerResult.cancelled){
            // setTimeout(()=> {},4000);
            setImgSrc(pickerResult.uri);
            const faces = await detectFaces(pickerResult.uri);
            console.log(faces);
            if(faces.faces.length!=0){
              sethasface(true)
              settransX(faces.faces[0].bounds.origin.x);
              console.log(faces.faces[0].bounds.origin.x);
              settransY(faces.faces[0].bounds.origin.y);
              setBoxSize({
                height: faces.faces[0].bounds.size.height,
                width: faces.faces[0].bounds.size.width
              })
            }
        }

      }catch(err){
        if (err.message !== 'User cancelled image selection') {
          console.error(err);
        }
      }
  };




  return (
    <Background>
    <View style = {styles.logo}><Logo /></View>
      <View style = {styles.head} >
      <Header style = {{ fontFamily: 'Ubuntu_500Medium',color: '#9c801a', fontSize : 67, textAlignVertical: "center",textAlign: "center", top : -150}}>Scanner</Header>
      </View >
      <Button mode="outlined" style = {styles.Upload}  onPress={() =>  {console.log('OK');navigation.navigate("LiveScreen")}}>
        Click to Open Face Detector
      </Button>






      <Button mode="contained" style = {styles.Submit} onPress={() => {console.log("Submitted"); navigation.navigate("Success")}}>
        Submit
      </Button>



    </Background>

  );
}

const styles = StyleSheet.create({
  buttonss :{
    top : 350,
    alignItems: 'center',
  },

  imageview : {
    top : 50,
    width : 350,
    height : 300,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    borderColor : 'black',
  },
  text :{
    fontSize: 20,
    fontWeight: "bold"
  },
  head :{
    top : 0,
  },
  Submit : {
    marginBottom : 10,
    top : 75,

  },
  logo : {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 45,
    position: 'absolute',
  },
  Upload : {
    marginBottom : 0,
    top : 10,
  }
});

export default Scanner;
