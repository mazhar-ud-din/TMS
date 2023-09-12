import React from 'react'
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { styles } from './styles'

const SelectAuthScreen = () => {
  return (
    <SafeAreaView style={styles.Container} >
      <View style={styles.BackImgStyle}>
        <ImageBackground source={ImagesPath.TaskIMG} style={styles.ImgStyle} />
      </View>
      <View style={styles.BottomStyle}>
        <Text style={styles.MidTextStyle}>
          Smart Task
        </Text>
        <Text style={styles.MidTextStyle}>
          Management
        </Text>
        <Text style={styles.MiniMidTextStyle}>
          This smart tools is designed to help you better manage your task
        </Text>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={[styles.ButtonStyle, { marginVertical: 30 }]}>
            <Text style={styles.BtnText} >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Text style={styles.BtnText}>
              SIDNIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default SelectAuthScreen

