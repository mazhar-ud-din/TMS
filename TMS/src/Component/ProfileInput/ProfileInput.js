import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { moderateScale, moderateScaleVertical } from '../../Utilities/AppSizeMegnesium'

const ProfileInput = ({ placeholder, source }) => {
    return (
        <View style={styles.Container}>
            <TextInput placeholderTextColor={AppColors.PrimaryBlack} style={{ flex: 1 }} placeholder={placeholder} />
            <View style={{ justifyContent: 'center' }}>
                {source ? <Image source={source} style={styles.ImgStyle} /> : null}
            </View>
        </View>
    )
}

export default ProfileInput

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        borderWidth: 1,
        width: moderateScale(325),
        height: moderateScaleVertical(50),
        borderRadius: 10,
        paddingHorizontal: moderateScale(5),
        marginVertical: moderateScaleVertical(12),
    },
    ImgStyle: {
        height: moderateScaleVertical(25),
        width: moderateScale(25),
    }
})