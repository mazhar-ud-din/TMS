import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../../Utilities/AppSizeMegnesium'
import CardCom from '../../../Component/CardCom/CardCom'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderTextStyle}>Profile</Text>
                <View style={styles.HeaderImgContainer}>
                    <Image source={ImagesPath.SearchIC} style={styles.HeaderImgStyle} />
                    <Image source={ImagesPath.MenuIC} style={[styles.HeaderImgStyle, { marginLeft: moderateScale(10) }]} />
                </View>
            </View>

            <View style={styles.ProfileContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextStyle}>
                        {`55`}
                    </Text>
                    <Text style={[styles.TextStyle, { fontSize: scale(18) }]}>
                        Complete Task
                    </Text>
                </View>
                <View style={styles.TextContainer}>
                    <Image source={ImagesPath.ProfileIMG} style={styles.Imgstyle} />
                    <Text style={[styles.TextStyle, { fontSize: scale(18), marginTop: moderateScaleVertical(10) }]}>Mazhar Ud Din </Text>
                    <Text style={[styles.TextStyle, { fontSize: scale(16), }]}>(Team Lead)</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextStyle}>
                        {`33`}
                    </Text>
                    <Text style={[styles.TextStyle, { fontSize: scale(18) }]}>
                        OnProgress
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.ProfileBtn}>
                    <Text style={styles.ProfileText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.TextStyle, { fontSize: scale(20), marginTop: 20 }]}>Explore</Text>
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <CardCom
                        source={ImagesPath.MemberIc}
                        CardValue={`Member`}
                    />
                    <CardCom
                        source={ImagesPath.ProIc}
                        CardValue={`Go Pro`}
                    />
                    <CardCom
                        source={ImagesPath.ReportIc}
                        CardValue={`Reports`}
                    />
                </View>
                <View style={styles.secondRow}>
                    <CardCom
                        source={ImagesPath.SettingIc}
                        CardValue={`Setting`}
                    />
                    <CardCom
                        CardContainer={{ marginLeft: moderateScale(10) }}
                        source={ImagesPath.LogoutIc}
                        CardValue={`Log out`}
                    />
                </View >
            </View>

        </SafeAreaView>
    )
}

export default ProfileScreen

export const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: moderateScale(10),
        backgroundColor: AppColors.PrimaryWhite,
        height: `100%`
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(5),
    },
    HeaderTextStyle: {
        fontSize: scale(18),
        color: AppColors.PrimaryBlack,
        fontWeight: 'bold'
    },
    HeaderImgContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    HeaderImgStyle: {
        width: moderateScale(30),
        height: moderateScaleVertical(30)
    },
    ProfileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(40)
    },
    TextContainer: {
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: textScale(24),
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack,
        marginTop: moderateScale(10)
    }, container: {
        flexDirection: 'column',
        paddingHorizontal: moderateScale(10),
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondRow: {
        flexDirection: 'row',
    },
    ProfileBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScaleVertical(40),
        width: 120,
        borderRadius: 10,
        backgroundColor: AppColors.AppTheme
    },
    ProfileText: {
        fontSize: textScale(16),
        fontWeight: 'bold',
        color: AppColors.PrimaryWhite
    },
    Imgstyle: {
        width: moderateScale(70),
        height: moderateScaleVertical(70),
    }

})