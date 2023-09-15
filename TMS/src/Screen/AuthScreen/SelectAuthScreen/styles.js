import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"
import { moderateScale, moderateScaleVertical, textScale } from "../../../Utilities/AppSizeMegnesium"


export const styles = StyleSheet.create({
    Container:
    {
        flex: 1,
        backgroundColor: AppColors.PrimaryWhite
    },
    BackImgStyle:
    {
        alignItems: `center`,
        justifyContent: `center`,
        marginVertical:moderateScaleVertical(15) 
    },
    BottomStyle:
    {
        paddingHorizontal:moderateScale(20) 
    },
    MidTextStyle:
    {
        fontSize:textScale(26) ,
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    },
    MiniMidTextStyle:
    {
        paddingVertical:moderateScaleVertical(20),
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        fontSize:textScale(18) 
    },
    ButtonContainer:{
        alignItems: 'center',
        paddingVertical:moderateScaleVertical(30) 
    },
    ButtonStyle:{
        borderRadius: 8,
        height:moderateScaleVertical(45),
        width:moderateScale(300),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:AppColors.AppTheme
    },
    BtnText:{
        color: AppColors.PrimaryWhite,
        fontWeight: 'bold',
        fontSize:textScale(18) 
    },
    ImgStyle: {
        height:moderateScaleVertical(350) ,
        width:moderateScale(350) 
    }
})