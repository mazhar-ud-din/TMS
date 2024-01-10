import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { moderateScale, moderateScaleVertical } from '../../Utilities/AppSizeMegnesium'

const InputCom = ({ placeholder, source,onChangeText }) => {
    return (
        <View style={styles.Container}>
            {source ? <Image source={source} style={styles.ImgStyle} /> : null}
            <Text style={{ borderLeftWidth: 1 }} />
            <TextInput 
            placeholderTextColor={AppColors.PrimaryBlack} 
            style={{ flex: 1 }}
             placeholder={placeholder}
             onChangeText={onChangeText}
             />
        </View>
    )
}

export default InputCom

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        paddingVertical: moderateScaleVertical(10),
        borderWidth: 1,
        width: moderateScale(325),
        height: moderateScaleVertical(60),
        borderRadius: 10,
        paddingHorizontal: moderateScale(5),
        marginVertical: moderateScaleVertical(12),
    },
    ImgStyle: {
        height: moderateScaleVertical(30),
        width: moderateScale(30)
    }
})