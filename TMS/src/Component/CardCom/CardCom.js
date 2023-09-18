import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { moderateScale, moderateScaleVertical, textScale } from '../../Utilities/AppSizeMegnesium'

const CardCom = ({ source, CardValue, CardContainer, CardValue1, TrendContainer, ImgStyle, TrendText }) => {
  return (
    <View style={{ ...styles.CardContainer, ...CardContainer }}>
      <Card style={{ ...styles.TrendContainer, ...TrendContainer }} >
        <Card.Content style={styles.TrendContent} >
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={source} style={{ ...styles.ImgStyle, ...ImgStyle }} />
            <Text style={{ ...styles.TrendText, ...TrendText }}>{CardValue}</Text>
            <Text style={{ ...styles.TrendText, ...TrendText }}>{CardValue1}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

export default CardCom

const styles = StyleSheet.create({
  CardContainer: {
    paddingHorizontal: moderateScale(16),
    marginVertical: moderateScaleVertical(30)
  },
  TrendContainer: {
    height: moderateScaleVertical(70),
    justifyContent: 'center',
    width: moderateScale(70),
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
  }
})
