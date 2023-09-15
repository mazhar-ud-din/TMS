import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import MainRoute from './src/Navigation/MainRoute/MainRoute'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <MainRoute />
    </>
  )
}

export default App

const styles = StyleSheet.create({})