import React from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { styles } from './styles'

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1}} >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 10 }}>
                <Image source={ImagesPath.BackIc} style={{ width: 30, height: 30 }} />
                <Text style={{ color: AppColors.PrimaryBlack, fontSize: 18, fontWeight: 'bold' }}>Back</Text>
            </View>
            <View style={{ marginVertical: 55, paddingHorizontal: 15 }}>
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
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10, borderWidth: 1, width: 320,
                    height: 60, borderRadius: 10, paddingHorizontal: 5, marginVertical: 15,
                }}>
                    <Image source={ImagesPath.UserIc} style={{ width: 30, height: 30 }} />
                    <Text style={{ borderLeftWidth: 1 }} />
                    <TextInput placeholderTextColor={AppColors.PrimaryBlack} style={{flex:1}} placeholder='Username' />
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    paddingVertical: 10, borderWidth: 1, width: 320,
                    height: 60, borderRadius: 10, paddingHorizontal: 5,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <Image source={ImagesPath.LockIC} style={{ width: 30, height: 30 }} />
                        <Text style={{ borderLeftWidth: 1 }} />
                        <TextInput placeholderTextColor={AppColors.PrimaryBlack}  placeholder='Password' />
                    </View>
                    <View style={{ marginHorizontal: 5 }}>
                        <Image source={ImagesPath.EyeIc} style={{ width: 30, height: 30 }} />
                    </View>
                </View>
            </View>

            <View style={{ alignSelf: 'flex-end',paddingHorizontal: 20,marginVertical:20  }}>
                <Text style={{ color: AppColors.PrimaryBlack, fontWeight: 'bold' }}>Forget Password</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={[styles.ButtonStyle, { marginVertical: 30 }]}>
                    <Text style={styles.BtnText} >
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderRadius: 8,
                    height: 45,
                    width: 300,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `white`, borderWidth: 0.4
                }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>
                        Don't have an account? SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default LoginScreen
