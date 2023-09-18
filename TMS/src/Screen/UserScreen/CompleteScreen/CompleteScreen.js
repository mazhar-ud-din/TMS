import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import ProgressCircle from 'react-native-progress-circle'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { moderateScaleVertical, textScale } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'

const CompleteScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>
        <Card style={styles.TrendContainer} >
          <Card.Content style={styles.TrendContent} >
            <View style={styles.CardStyle}>
              <View style={styles.ProgressStyle}>
                <ProgressCircle
                  percent={30}
                  radius={35}
                  borderWidth={8}
                  color="#3399FF"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: textScale(18) }}>{'30%'}</Text>
                </ProgressCircle>
              </View>

              <Text style={styles.TrendText}>{`12 Task`}</Text>
              <Text style={styles.TrendText}>{`Landing page wirframe`}</Text>
              <View style={styles.ButtonStyle}>
                <Text style={[styles.TrendText, { color: AppColors.PrimaryWhite }]}>
                  Web
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View style={[styles.CardContainer, { marginTop: moderateScaleVertical(90) }]}>
        <Card style={styles.TrendContainer} >
          <Card.Content style={styles.TrendContent} >
            <View style={styles.CardStyle}>
              <View style={styles.ProgressStyle}>
                <ProgressCircle
                  percent={30}
                  radius={35}
                  borderWidth={8}
                  color="#3399FF"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: textScale(18) }}>{'30%'}</Text>
                </ProgressCircle>
              </View>

              <Text style={styles.TrendText}>{`12 Task`}</Text>
              <Text style={styles.TrendText}>{`Landing page wirframe`}</Text>
              <View style={styles.ButtonStyle}>
                <Text style={[styles.TrendText, { color: AppColors.PrimaryWhite }]}>
                  App
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  )
}

export default CompleteScreen

