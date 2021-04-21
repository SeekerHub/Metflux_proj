import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItemList,
         DrawerItem
       } from '@react-navigation/drawer';
import { theme } from './src/core/theme'
import {
  Dashboard,
  LiveScreen,
  Photo,
  Home,
  SplashScreen,
  About,
  Settings,
  Support,
  SideMenu,
  Success,
  Success_chasis,
  Scanner,
} from './src/screens'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

const Main = () => {

  return (
    <Provider theme={theme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Success_chasis" component={Success_chasis} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Scanner" component={Scanner} />

          <Stack.Screen name="LiveScreen" component={LiveScreen} />
          <Stack.Screen name="Photo" component={Photo}/>


        </Stack.Navigator>
    </Provider>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Main" drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App
