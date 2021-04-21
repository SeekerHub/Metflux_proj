import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Background from '../components/Background'

const Success_chasis = ({ navigation }) => {
  const animation = useRef(null)

  setTimeout(() => {
      navigation.navigate('Dashboard');
  },500);

  useEffect(() => {
    animation.current.play();
  })

  return (
    <View style={styles.animationContainer}>
    <Background>

       <LottieView  ref={animation} source={require('../assets/tick.json')} />

    </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
 export default Success_chasis;
