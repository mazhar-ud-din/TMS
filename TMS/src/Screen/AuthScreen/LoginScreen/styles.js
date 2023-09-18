import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"
import { moderateScale, moderateScaleVertical, textScale } from "../../../Utilities/AppSizeMegnesium"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.PrimaryWhite
    },
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
    InputContainer: {
        alignItems: 'center',
        marginTop: moderateScaleVertical(20)
    },
    TextStyle: {
        marginVertical: moderateScaleVertical(55),
        paddingHorizontal: moderateScale(16)
    },
    forgetStyle: {
        alignSelf: 'flex-end',
        paddingHorizontal: moderateScale(20),
    },
    forgetTxt: {
        color: AppColors.PrimaryBlack,
        fontWeight: 'bold'
    },
    MidTextStyle: {
        fontSize: textScale(26),
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    },
    MiniMidTextStyle: {
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        fontSize: textScale(16)
    },
    ButtonContainer: {
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(80)
    },
    ButtonStyle: {
        borderRadius: 8,
        height: moderateScaleVertical(45),
        width: moderateScale(305),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.AppTheme
    },
    BtnText: {
        color: AppColors.PrimaryWhite,
        fontWeight: 'bold',
        fontSize: textScale(18)
    },
    TextStyles: {
        color: AppColors.PrimaryBlack,
        fontSize: textScale(18),
        fontWeight: 'bold'
    }
})
