import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"
import { moderateScale, moderateScaleVertical } from "../../../Utilities/AppSizeMegnesium"


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
        fontSize: 25,
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    },
    MiniMidTextStyle:
    {
        paddingVertical: 20,
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        fontSize: 15
    },
    ButtonContainer:{
        alignItems: 'center',
        paddingVertical: 30
    },
    ButtonStyle:{
        borderRadius: 8,
        height: 45,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#644CBC'
    },
    BtnText:{
        color: AppColors.PrimaryWhite,
        fontWeight: 'bold',
        fontSize: 18
    },
    ImgStyle: {
        height: 350,
        width: 350
    }
})