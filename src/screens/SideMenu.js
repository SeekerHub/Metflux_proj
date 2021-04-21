import React, {Component} from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import { logoutUser } from '../api/auth-api'

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu'
import AppLoading from 'expo-app-loading';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {
    const [fontsLoaded, errr] = useFonts({
      Ubuntu_500Medium,
      Ubuntu_400Regular,
    })
    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image
                            source={require('../assets/images/avatar.jpg')}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Bhavesh Gandhi</Title>
                            <Caption style={styles.caption_u}>User</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Icon name="star-four-points" style={{color:'yellow', marginRight : 10}} />
                            <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                            <Caption style={styles.caption}>Points</Caption>
                        </View>
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section>

                    <DrawerItem
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) }
                        label="Home"
                        onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) }
                        label="About"
                        style = {{fontFamily: 'Ubuntu_500Medium'}}
                        onPress={ ()=>{props.navigation.navigate('About')} }
                    />

                     <DrawerItem
                        icon = { ()=> ( <Icon name="settings-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) }
                        label="Settings"
                        onPress={ ()=>{props.navigation.navigate('Settings')} }
                    />
                     <DrawerItem
                        icon = { ()=> ( <Icon name="account-check-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) }
                        label="Support"
                        onPress={ ()=>{props.navigation.navigate('Support')} }
                    />
                </Drawer.Section>
                <Drawer.Section title="Choose Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={cDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>


            </DrawerContentScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
      marginTop: -20,
      paddingTop : 20,
      marginBottom: 20,
      backgroundColor : '#213242',
      height: 140,
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      color: '#DCE1E5',
      fontFamily: 'Ubuntu_500Medium',
    },
    caption_u: {
      fontSize: 14,
      lineHeight: 14,
      color: 'white',
      fontFamily: 'Ubuntu_500Medium',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: "#798894",
      fontFamily: 'Ubuntu_500Medium',
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
      fontFamily: 'Ubuntu_500Medium',
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
export default SideMenu;
