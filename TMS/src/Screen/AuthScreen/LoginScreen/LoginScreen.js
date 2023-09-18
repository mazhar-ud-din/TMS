import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ButtonCom from '../../../Component/ButtonCom/ButtonCom'
import InputCom from '../../../Component/InputCom/InputCom'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { NavString } from '../../../Navigation/NavString/NavString'
import { moderateScaleVertical } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <View style={styles.HeaderContainer}>
                    <Image source={ImagesPath.BackIc} style={styles.ImgStyle} />
                    <Text style={styles.TextStyles}>Back</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.TextStyle}>
                <Text style={styles.MidTextStyle}>
                    WellCome Back!
                </Text>
                <Text style={styles.MiniMidTextStyle}>
                    Login your account & manage
                </Text>
                <Text style={styles.MiniMidTextStyle}>
                    your task
                </Text>
            </View>
            <View style={styles.InputContainer}>
                <InputCom
                    source={ImagesPath.UserIc}
                    placeholder={'Username'}
                />
                <InputCom
                    source={ImagesPath.LockIC}
                    placeholder={'Password'}
                />
            </View>
            <View style={styles.forgetStyle}>
                <Text style={styles.forgetTxt}>Forget Password</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <ButtonCom
                    onPress={() => { navigation.navigate(NavString.BOTTOMTAB) }}
                    BtnValue={`LOGIN`}
                    ButtonStyle={{
                        backgroundColor: AppColors.AppTheme,
                        marginVertical: moderateScaleVertical(30)
                    }}
                    TxtStyle={{ color: AppColors.PrimaryWhite }}
                />
                <ButtonCom
                onPress={() => { navigation.navigate(NavString.REGISTERSCREEN) }}
                    BtnValue={`Don't have an account? SIGN UP`}
                    ButtonStyle={{ borderWidth: 0.4 }}
                />
            </View>
        </View>

    )
}

export default LoginScreen
