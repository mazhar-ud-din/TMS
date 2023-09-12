import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical, scale } from '../../../Utilities/AppSizeMegnesium'
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
                    <Image source={ImagesPath.ProfileIMG} style={{ width: 70, height: 70, }} />
                    <Text style={[styles.TextStyle, { fontSize: scale(18), marginVertical: moderateScaleVertical(10) }]}>Mazhar Ud Din </Text>
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
            <Text style={[styles.TextStyle, { fontSize: scale(20) }]}>Explore</Text>
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <CardCom
                        source={ImagesPath.MemberIc}
                        CardValue={`Memberbjmnn`}
                    />
                    <CardCom
                        source={ImagesPath.ProIc}
                    />
                    <CardCom
                        source={ImagesPath.ReportIc}
                    />
                </View>
                <View style={styles.secondRow}>
                    <CardCom
                        source={ImagesPath.SettingIc}
                    />
                    <CardCom
                        CardContainer={{ marginLeft: moderateScale(10) }}
                        source={ImagesPath.LogoutIc}
                    />
                </View >
            </View>

        </SafeAreaView>
    )
}

export default ProfileScreen

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: moderateScale(10),
        backgroundColor: AppColors.PrimaryWhite
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
        fontSize: 24,
        fontWeight: 'bold',
        color: AppColors.PrimaryBlack
    }, container: {
        flexDirection: 'column', // Main container is column-oriented
        paddingHorizontal: 10,
    },
    firstRow: {
        flexDirection: 'row', // First row is row-oriented
        justifyContent: 'space-between', // Spacing is equal between items
    },
    secondRow: {
        flexDirection: 'row', // Second row is row-oriented
    },

})