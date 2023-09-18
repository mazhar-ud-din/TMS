import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DropDownCom from '../../../Component/DropDownCom/DropDownCom'
import ProfileInput from '../../../Component/ProfileInput/ProfileInput'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical } from '../../../Utilities/AppSizeMegnesium'

const ProjectScreen = () => {
  return (
    <View >
      <TouchableOpacity style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
        <View style={styles.HeaderContainer}>
          <Image source={ImagesPath.BackIc} style={styles.ImgStyle} />
          <Text style={{ color: AppColors.PrimaryBlack, fontSize: 18, fontWeight: 'bold' }}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: 'center',marginTop:50 }}>
        <DropDownCom />
        <DropDownCom />
        <ProfileInput
          source={ImagesPath.CalenderIc}
          placeholder={`Start Date`}
        />
        <ProfileInput
          source={ImagesPath.CalenderIc}
          placeholder={`End Date`}
        />
        <ProfileInput
          source={ImagesPath.AssignIc}
          placeholder={`Assign To`}
        />
        <ProfileInput
          source={ImagesPath.AssignIc}
          placeholder={`Description`}
        />
      </View>
    </View>
  )
}

export default ProjectScreen

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