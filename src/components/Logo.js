import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/log.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    marginBottom: 8,
  },
})

export default Logo
