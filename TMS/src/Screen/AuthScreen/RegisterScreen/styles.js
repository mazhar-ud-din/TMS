import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"
import { moderateScale, moderateScaleVertical, textScale } from "../../../Utilities/AppSizeMegnesium"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.PrimaryWhite
    },
    TextStyle: {
        marginVertical: moderateScaleVertical(30),
        paddingHorizontal: moderateScale(15)
    },
    InputContainer: {
        alignItems: 'center'
    },
    MidTextStyle: {
        fontSize: textScale(30),
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    },
    MiniMidTextStyle: {
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        fontSize: textScale(18)
    },
    ButtonContainer: {
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(30)
    },
    ButtonStyle: {
        borderRadius: 8,
        height: moderateScaleVertical(45),
        width: moderateScale(300),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.AppTheme
    },
    BtnText: {
        color: AppColors.PrimaryWhite,
        fontWeight: 'bold',
        fontSize: textScale(18)
    },
    PasswordInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(10),
        borderWidth: 1,
        width: moderateScale(325),
        height: moderateScaleVertical(60),
        borderRadius: 10,
        paddingHorizontal: moderateScale(5)
    },
    ImgStyle: {
        width: moderateScale(30),
        height: moderateScaleVertical(30)
    },
    ForgetStyle: {
        alignSelf: 'flex-end',
        paddingHorizontal: moderateScale(20),
        marginVertical: moderateScaleVertical(20)
    },
    forgetText: {
        color: AppColors.PrimaryBlack,
        fontWeight: 'bold'
    },
    HeaderRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(10)
    },
    ImgHeaderStyle: {
        width: moderateScale(30),
        height: moderateScaleVertical(30)
    },
    HeaderTxt:{ 
        color: AppColors.PrimaryBlack, 
        fontSize:textScale(18) ,
         fontWeight: 'bold' 
        }
})

