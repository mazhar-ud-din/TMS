import { StyleSheet } from "react-native";
import { AppColors } from '../../../Constant/AppColors/AppColors';
import { moderateScale, moderateScaleVertical, textScale } from '../../../Utilities/AppSizeMegnesium';

export const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: moderateScaleVertical(10)
    },
    ImgStyle: {
        width: moderateScale(30),
        height: moderateScaleVertical(30)
    },
    TextStyle: {
        color: AppColors.PrimaryBlack,
        fontSize: textScale(18),
        fontWeight: 'bold'
    }
})