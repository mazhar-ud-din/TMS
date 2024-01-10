import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ButtonCom from '../../../Component/ButtonCom/ButtonCom'
import InputCom from '../../../Component/InputCom/InputCom'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'
import { NavString } from '../../../Navigation/NavString/NavString'
import axios from 'axios'

const RegisterScreen = ({ navigation }) => {

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState('')
    const [Rating, setRating] = useState('')
    const [Discount, setDiscount] = useState('')
    const [Thumbnail, setThumbnail] = useState('')



    const Product = {
        title: Title,
        description: Description,
        price: Price,
        discountPercentage: Discount,
        rating:Rating,
        thumbnail: Thumbnail
    }
    const AddProduct = async () => {
        try {
            const res = await axios.post('http://192.168.100.108:8080/products', Product);
            console.log('Product added successfully!', res);
        } catch (err) {
            console.log('Error123', err.response.data);
        }
    }

    // const Product = {
    //     "title": "POCO",
    //     "description": "brand Phone",
    //     "price": 33000,
    //     "discountPercentage": 20.96,
    //     "brand": "Local brand",
    //     "category": "Premium",
    //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    // }

    return (
        <View style={styles.container} >
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.HeaderRow}>
                        <Image source={ImagesPath.BackIc} style={styles.ImgHeaderStyle} />
                        <Text style={styles.HeaderTxt}>Back</Text>
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
                        placeholder={`Title`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Title) => setTitle(Title)}
                    />
                    <InputCom
                        placeholder={`Description`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Description) => setDescription(Description)}
                    />
                    <InputCom
                        placeholder={`Price`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Price) => setPrice(Price)}
                    />
                    <InputCom
                        placeholder={`Rating`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Rating) => setRating(Rating)}
                    />
                    <InputCom
                        placeholder={`Discount Percentage`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Discount) => setDiscount(Discount)}
                    />
                    <InputCom
                        placeholder={`Thumbnail`}
                        source={ImagesPath.UserIc}
                        onChangeText={(Thumbnail) => setThumbnail(Thumbnail)}
                    />
                    {/* <InputCom
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
                </View> */}
                </View>
                <TouchableOpacity>
                    <View style={styles.ForgetStyle}>
                        <Text style={styles.forgetText}>Forget Password</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.ButtonContainer}>
                    <ButtonCom
                        BtnValue={`SIGNUP`}
                        ButtonStyle={{ backgroundColor: AppColors.AppTheme, marginVertical: moderateScale(30) }}
                        TxtStyle={{ color: AppColors.PrimaryWhite }}
                        onPress={AddProduct}
                    />
                    <ButtonCom
                        onPress={() => { navigation.navigate(NavString.LOGINSCREEN) }}

                        BtnValue={` Already have an account? LOG IN`}
                        ButtonStyle={{ borderWidth: 0.5 }}
                    />
                </View>
            </ScrollView>
        </View>

    )
}

export default RegisterScreen
