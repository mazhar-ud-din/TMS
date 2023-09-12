import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../Constant/AppColors/AppColors'
import { Card } from 'react-native-paper'
import { ImagesPath } from '../../Constant/ImagesPath/ImagesPath'

const CardCom = ({source,CardValue,CardContainer}) => {
  return (
    <View style={{...styles.CardContainer,...CardContainer}}>
        <Card style={styles.TrendContainer} >
          <Card.Content style={styles.TrendContent} >
            <View style={{flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
              <Image source={source} style={styles.ImgStyle} />
            <Text style={styles.TrendText}>{CardValue}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
  )
}

export default CardCom

const styles = StyleSheet.create({
    CardContainer:
    {
      paddingHorizontal: 15,
      marginVertical: 30
  
    },
    TrendContainer:
    {
      height: 70,
      justifyContent: 'center',
      width:70,
    },
    TrendContent:
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    TrendText:
    {
      fontSize: 11,
      fontWeight: 'bold',
      color: AppColors.PrimaryBlack,
    },
    ImgContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch'
    },
    ImgStyle: {
      height: 25,
      width: 25,
      tintColor: AppColors.AppTheme
    }
})