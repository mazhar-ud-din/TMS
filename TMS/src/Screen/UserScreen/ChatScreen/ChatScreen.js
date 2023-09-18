import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ListCom from '../../../Component/ListCom/ListCom'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { NavString } from '../../../Navigation/NavString/NavString'
import { moderateScale, moderateScaleVertical } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.Header} >
        <View style={styles.HeaderContainer}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={ImagesPath.BackIc} style={styles.ImgStyle} />
          </TouchableOpacity>
          <Text style={styles.TextStyle}>Back</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={ImagesPath.SearchIC} style={styles.ImgStyle} />
          <Image source={ImagesPath.DotIc} style={styles.ImgStyle} />
        </View>
      </View>
      <ListCom
        onPress={() => { navigation.navigate(NavString.CONVERSATION) }}
        source={ImagesPath.ChatProfileIMG}
        Value={`Saif Ullah`}
        ImgStyle={{
          height: moderateScaleVertical(45),
          width: moderateScale(45),
          borderRadius: 10
        }}
        source1={ImagesPath.MessageIc}
        ProfileImgStyle={{
          height: moderateScaleVertical(25),
          width: moderateScale(25),
        }}
        CardContainer={{
          paddingHorizontal: moderateScale(10),
          width: moderateScale(335),
          marginLeft: moderateScale(15),
          alignItems: 'center',
          marginTop: moderateScaleVertical(10)
        }}
      />
      <ListCom
        onPress={() => { navigation.navigate(NavString.CONVERSATION) }}
        source={ImagesPath.ChatProfileIMG}
        Value={`Faisal Iqbal`}
        ImgStyle={{
          height: moderateScaleVertical(45),
          width: moderateScale(45),
          borderRadius: 10
        }}
        source1={ImagesPath.MessageIc}
        ProfileImgStyle={{
          height: moderateScaleVertical(25),
          width: moderateScale(25),
        }}
        CardContainer={{
          paddingHorizontal: moderateScale(10),
          width: moderateScale(335),
          marginLeft: moderateScale(15),
          alignItems: 'center',
          marginTop: moderateScaleVertical(10)
        }}
      />


      <ListCom
        onPress={() => { navigation.navigate(NavString.CONVERSATION) }}
        source={ImagesPath.ChatProfileIMG}
        Value={`Mukhtayar`}
        ImgStyle={{
          height: moderateScaleVertical(45),
          width: moderateScale(45),
          borderRadius: 10,
        }}
        source1={ImagesPath.MessageIc}
        ProfileImgStyle={{
          height: moderateScaleVertical(25),
          width: moderateScale(25),
        }}
        CardContainer={{
          paddingHorizontal: moderateScale(10),
          width: moderateScale(335),
          marginLeft: moderateScale(15),
          alignItems: 'center',
          marginTop: moderateScaleVertical(10)
        }}
      />
    </View>
  )
}

export default ChatScreen

