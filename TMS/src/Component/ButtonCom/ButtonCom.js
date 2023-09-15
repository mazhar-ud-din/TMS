import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { moderateScale, moderateScaleVertical, textScale } from '../../Utilities/AppSizeMegnesium'

const ButtonCom = ({ ButtonStyle, BtnValue,TxtStyle,onPress }) => {
    return (
        <TouchableOpacity style={{ ...styles.ButtonStyle, ...ButtonStyle }} onPress={onPress}>
            <Text style={{...styles.TxtStyle,...TxtStyle}}>
                {BtnValue}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonCom

const styles = StyleSheet.create({
    ButtonStyle: {
        borderRadius: 8,
        height: moderateScaleVertical(45),
        width: moderateScale(305),
        alignItems: 'center',
        justifyContent: 'center',
    },
    TxtStyle: {
        color: AppColors.PrimaryBlack,
        fontSize: textScale(20)
    }
})