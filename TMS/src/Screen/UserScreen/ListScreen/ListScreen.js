import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical } from '../../../Utilities/AppSizeMegnesium'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import DateTimeCom from '../../../Component/DateTimeCom/DateTimeCom'

const ListScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <DateTimeCom/>
        <View style={styles.HeaderImgContainer}>
          <Image source={ImagesPath.SearchIC} style={styles.SearchImg} />
          <Image source={ImagesPath.DotIc} style={styles.ImgStyle} />
        </View>
      </View>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: moderateScale(12),
    backgroundColor:AppColors.PrimaryWhite
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderImgContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  ImgStyle: {
    height: moderateScaleVertical(25),
    width: moderateScale(25)
  },
  SearchImg:{
    height: moderateScaleVertical(30),
    width: moderateScale(30),
    marginRight:moderateScale(8)
  }
})