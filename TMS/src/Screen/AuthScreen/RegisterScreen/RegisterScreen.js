import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ButtonCom from '../../../Component/ButtonCom/ButtonCom'
import InputCom from '../../../Component/InputCom/InputCom'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 10 }}>
                    <Image source={ImagesPath.BackIc} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: AppColors.PrimaryBlack, fontSize: 18, fontWeight: 'bold' }}>Back</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.TextStyle}>
                <Text style={styles.MidTextStyle}>
                    Sign Up
                </Text>
                <Text style={styles.MiniMidTextStyle}>
                    Create an account & manage
                </Text>
                <Text style={styles.MiniMidTextStyle}>
                    your task
                </Text>
            </View>
            <View style={styles.InputContainer}>
                <InputCom
                    placeholder={`UserName`}
                    source={ImagesPath.UserIc}
                />
                <InputCom
                    placeholder={`Email`}
                    source={ImagesPath.MailIC}
                />
                <View style={styles.PasswordInput}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <Image source={ImagesPath.LockIC} style={styles.ImgStyle} />
                        <Text style={{ borderLeftWidth: 1 }} />
                        <TextInput placeholderTextColor={AppColors.PrimaryBlack} placeholder='Password' />
                    </View>
                    <View style={{ marginHorizontal: 5 }}>
                        <Image source={ImagesPath.EyeIc} style={styles.ImgStyle} />
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.ForgetStyle}>
                    <Text style={styles.forgetText}>Forget Password</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.ButtonContainer}>
                <ButtonCom
                    BtnValue={`SIGNUP`}
                    ButtonStyle={{ backgroundColor: AppColors.AppTheme, marginVertical: moderateScale(30)}}
                    TxtStyle={{color:AppColors.PrimaryWhite }}
                />
                <ButtonCom
                    BtnValue={` Already have an account? LOG IN`}
                    ButtonStyle={{ borderWidth: 0.5 }}
                />
            </View>
        </View>

    )
}

export default RegisterScreen
