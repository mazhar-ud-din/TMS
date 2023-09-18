import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardCom from '../../../Component/CardCom/CardCom'
import DateTimeCom from '../../../Component/DateTimeCom/DateTimeCom'
import ListCom from '../../../Component/ListCom/ListCom'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { ImagesPath } from '../../../Constant/ImagesPath/ImagesPath'
import { moderateScale, moderateScaleVertical, textScale } from '../../../Utilities/AppSizeMegnesium'

const ListScreen = () => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={{ backgroundColor: AppColors.PrimaryWhite, height: 375, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
          <View style={styles.HeaderContainer}>
            <DateTimeCom />
            <View style={styles.HeaderImgContainer}>
              <Image source={ImagesPath.SearchIC} style={styles.SearchImg} />
              <Image source={ImagesPath.DotIc} style={styles.ImgStyle} />
            </View>
          </View>
          <Text style={styles.todayText}>Today</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(30) }}>
            <View>
              <CardCom
                source={ImagesPath.OnGoingIc}
                CardValue={`14`}
                CardValue1={`Ongoing`}
                TrendContainer={{ height: 90, width: 150, backgroundColor: AppColors.AppTheme }}
                CardContainer={{ marginVertical: moderateScaleVertical(10) }}
                ImgStyle={{ alignSelf: 'flex-end', height: moderateScaleVertical(20), width: moderateScale(20), tintColor: AppColors.PrimaryWhite }}
                TrendText={{ fontSize: textScale(20), color: AppColors.PrimaryWhite }}
              />
              <CardCom
                source={ImagesPath.CompleteIc}
                CardValue={`35`}
                CardValue1={`Completed`}
                TrendContainer={{ height: 90, width: 150, backgroundColor: `#93C54B` }}
                CardContainer={{ marginVertical: moderateScaleVertical(10) }}
                ImgStyle={{ alignSelf: 'flex-end', height: moderateScaleVertical(20), width: moderateScale(20), tintColor: AppColors.PrimaryWhite }}
                TrendText={{ fontSize: textScale(20), color: AppColors.PrimaryWhite }}
              />
            </View>
            <View>
              <CardCom
                source={ImagesPath.InProgressIc}
                CardValue={`20`}
                CardValue1={`In Progress`}
                TrendContainer={{ height: 90, width: 150, backgroundColor: `#F8AE3F` }}
                CardContainer={{ marginVertical: moderateScaleVertical(10) }}
                ImgStyle={{ alignSelf: 'flex-end', height: moderateScaleVertical(20), width: moderateScale(20), tintColor: AppColors.PrimaryWhite }}
                TrendText={{ fontSize: textScale(20), color: AppColors.PrimaryWhite }}
              />
              <CardCom
                source={ImagesPath.CancelIc}
                CardValue={`28`}
                CardValue1={`Cancelled`}
                TrendContainer={{ height: 90, width: 150, backgroundColor: `#F3116B` }}
                CardContainer={{ marginVertical: moderateScaleVertical(10) }}
                ImgStyle={{ alignSelf: 'flex-end', height: moderateScaleVertical(20), width: moderateScale(20), tintColor: AppColors.PrimaryWhite }}
                TrendText={{ fontSize: textScale(20), color: AppColors.PrimaryWhite }}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: AppColors.PrimaryBlack, fontWeight: 'bold' }}>Add Task</Text>
            <Image source={ImagesPath.AddIc} style={{ height: moderateScaleVertical(25), width: moderateScale(25), marginLeft: 5, tintColor: `#F8AE3F` }} />
          </View>
          <Text style={{ color: AppColors.PrimaryBlack, fontWeight: 'bold' }}>All Task</Text>
        </View>
        <ListCom
          Value={`Mobile App Design`}
          source={ImagesPath.CheckIc}
          source1={ImagesPath.ProfileIMG}
          ImgTextContainer={{ alignItems: 'center' }}
        />
        <ListCom
          ImgTextContainer={{ alignItems: 'center' }}
          Value={`Dashboard Design`}
          source={ImagesPath.CheckIc}
          source1={ImagesPath.ProfileIMG}
        />
        <ListCom
          ImgTextContainer={{ alignItems: 'center' }}
          Value={`Wordpress Design`}
          source={ImagesPath.CheckIc}
          source1={ImagesPath.ProfileIMG}
        />
      </ScrollView>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: AppColors.PrimaryWhite,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(12)
  },
  HeaderImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImgStyle: {
    height: moderateScaleVertical(25),
    width: moderateScale(25)
  },
  SearchImg: {
    height: moderateScaleVertical(30),
    width: moderateScale(30),
    marginRight: moderateScale(8)
  },
  todayText: {
    fontWeight: 'bold',
    color: AppColors.PrimaryBlack,
    fontSize: textScale(24),
    marginTop: moderateScaleVertical(30),
    paddingHorizontal: moderateScale(12)
  }
})