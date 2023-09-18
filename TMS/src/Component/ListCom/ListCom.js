import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { moderateScale, moderateScaleVertical } from '../../Utilities/AppSizeMegnesium'

const ListCom = ({ Value, CardContainer, TrendText, ImgStyle, ProfileImgStyle, source, source1, onPress, ImgTextContainer }) => {
    return (
        <TouchableOpacity onPress={onPress} >

            <View style={{ ...styles.CardContainer, ...CardContainer }}>
                <View style={{ ...styles.ImgTextContainer, ...ImgTextContainer }}>
                    <Image source={source} style={{ ...styles.ImgStyle, ...ImgStyle }} />
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ ...styles.TrendText, ...TrendText }}>{Value}</Text>
                        <Text style={[{ ...styles.TrendText, ...TrendText }, { fontSize: 12 }]}>Hello</Text>
                    </View>
                </View>
                <Image source={source1} style={{ ...styles.ProfileImgStyle, ...ProfileImgStyle }} />
            </View>
        </TouchableOpacity>
    )
}

export default ListCom

const styles = StyleSheet.create({
    CardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        borderRadius: 10,
        backgroundColor: 'white',
        width: moderateScale(325),
        marginLeft: moderateScale(20),
        height: moderateScaleVertical(65),
        marginTop: moderateScaleVertical(15)
    },
    TrendText: {
        color: AppColors.PrimaryBlack,
        fontWeight: 'bold',
        marginLeft: moderateScale(10)
    },
    ImgTextContainer: {
        flexDirection: 'row',
    },
    ProfileImgStyle: {
        height: moderateScaleVertical(45),
        width: moderateScale(45),
        marginTop: moderateScale(5)
    },
    ImgStyle: {
        height: moderateScaleVertical(25),
        width: moderateScale(25)
    }
})