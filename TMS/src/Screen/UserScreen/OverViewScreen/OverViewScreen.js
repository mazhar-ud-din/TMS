import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical } from '../../../Utilities/AppSizeMegnesium'
import AllScreen from '../AllScreen/AllScreen'
import GoingScreen from '../GoingScreen/GoingScreen'
import CompleteScreen from '../CompleteScreen/CompleteScreen'

const OverViewScreen = ({ navigation }) => {
  const [Button, setButton] = useState(`All`)

  return (
    <View >
      <TouchableOpacity style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
        <View style={styles.HeaderContainer}>
          <Image source={ImagesPath.BackIc} style={styles.ImgStyle} />
          <Text style={{ color: AppColors.PrimaryBlack, fontSize: 18, fontWeight: 'bold' }}>Back</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={ImagesPath.SearchIC} style={styles.ImgStyle} />
          <Image source={ImagesPath.DotIc} style={styles.ImgStyle} />
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: AppColors.PrimaryWhite, height: 40 }}>
          <TouchableOpacity onPress={() => setButton(`All`)}>
            <View style={{
              borderRadius: 10,
              width: 80,
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              backgroundColor: Button !== `All` ? AppColors.PrimaryWhite : AppColors.AppTheme,
            }}>
              <Text style={{
                color: Button !== `All` ? AppColors.AppTheme : AppColors.PrimaryWhite,
                fontWeight: 'bold'
              }}>
                All
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setButton(`Ongoing`)}>
            <View style={{
              borderRadius: 10,
              width: 80,
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              backgroundColor: Button === `Ongoing` ? AppColors.AppTheme : AppColors.PrimaryWhite,
              marginHorizontal: 5
            }}>
              <Text style={{
                color: Button !== `Ongoing` ? AppColors.AppTheme : AppColors.PrimaryWhite,
                fontWeight: 'bold'
              }}>
                Ongoing
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setButton(`Completed`)}>

            <View style={{
              borderRadius: 10,
              width: 80,
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              backgroundColor: Button === `Completed` ? AppColors.AppTheme : AppColors.PrimaryWhite,
            }}>
              <Text style={{
                color: Button !== `Completed` ? AppColors.AppTheme : AppColors.PrimaryWhite,
                fontWeight: 'bold'
              }}>
                Completed
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {Button === `All` ? <AllScreen /> : Button === `Ongoing` ? <GoingScreen /> : Button === `Completed` ? <CompleteScreen /> : <AllScreen />}
    </View>
  )
}

export default OverViewScreen

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10
  },
  ImgStyle: {
    width: moderateScale(30),
    height: moderateScaleVertical(30)
  },
})