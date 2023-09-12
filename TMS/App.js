import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectAuthScreen from './src/Screen/AuthScreen/SelectAuthScreen/SelectAuthScreen'
import LoginScreen from './src/Screen/AuthScreen/LoginScreen/LoginScreen'
import RegisterScreen from './src/Screen/AuthScreen/RegisterScreen/RegisterScreen'
import ProfileScreen from './src/Screen/UserScreen/ProfileScreen/ProfileScreen'

const App = () => {
  return (
    <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
    <ProfileScreen/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})