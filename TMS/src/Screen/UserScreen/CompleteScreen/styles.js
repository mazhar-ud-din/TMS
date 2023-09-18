import { StyleSheet } from "react-native"
import { AppColors } from "../../../Constant/AppColors/AppColors"
import { moderateScale, moderateScaleVertical, textScale } from "../../../Utilities/AppSizeMegnesium"


export const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: moderateScale(15),
        marginVertical: moderateScaleVertical(30)
    },
    TrendContainer: {
        height: moderateScaleVertical(180),
        justifyContent: 'center',
        width: moderateScale(140),
    },
    TrendText: {
        fontSize: textScale(11),
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
    },
    ImgContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    ImgStyle: {
        height: moderateScaleVertical(25),
        width: moderateScale(25),
        tintColor: AppColors.AppTheme
    },
    Container: {
        flexDirection: 'row',
        marginLeft: moderateScale(10)
    },
    CardStyle: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    ProgressStyle: {
        alignItems: 'center',
        marginVertical: moderateScaleVertical(10)
    },
    ButtonStyle: {
        borderRadius: 10,
        width: moderateScale(60),
        alignItems: 'center',
        height: moderateScaleVertical(30),
        justifyContent: 'center',
        backgroundColor: `#F8AE3F`,
    }
})