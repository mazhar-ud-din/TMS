import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../Utilities/AppSizeMegnesium'
import { ImagesPath } from '../../Constant/ImagesPath/ImagesPath'
import { AppColors } from '../../Constant/AppColors/AppColors'

const InputCom = ({placeholder,source}) => {
    return (
        <View style={styles.Container}>
            <Image source={source} style={styles.ImgStyle} />
            <Text style={{ borderLeftWidth: 1 }} />
            <TextInput placeholderTextColor={AppColors.PrimaryBlack} style={{ flex: 1 }} placeholder={placeholder} />
        </View>
    )
}

export default InputCom

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        paddingVertical:moderateScaleVertical(10),
        borderWidth:1,
        width:moderateScale(325) ,
        height:moderateScaleVertical(60),
        borderRadius: 10,
        paddingHorizontal:moderateScale(5) ,
        marginVertical:moderateScaleVertical(12),
    },
    ImgStyle:{
        height:moderateScaleVertical(30),
        width:moderateScale(30)
    }
})