import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"

export const styles = StyleSheet.create({
    MidTextStyle:
    {
        fontSize: 25,
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    },
    MiniMidTextStyle:
    {
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        fontSize: 15
    },
    ButtonContainer:
    {
        alignItems: 'center',
        paddingVertical: 30
    },
    ButtonStyle:
    {
        borderRadius: 8,
        height: 45,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#644CBC'
    },
    BtnText:
    {
        color:AppColors.PrimaryWhite,
        fontWeight: 'bold',
        fontSize: 18
    }
})
