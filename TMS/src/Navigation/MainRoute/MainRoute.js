import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNav from '../MainNav/MainNav'

const MainRoute = () => {
  return (
    <NavigationContainer>
        <MainNav/>
    </NavigationContainer>
  )
}

export default MainRoute

const styles = StyleSheet.create({})