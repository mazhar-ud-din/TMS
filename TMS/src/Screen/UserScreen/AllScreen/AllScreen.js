import React, { useEffect, useState } from 'react'
import { Text, View, Alert, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import ProgressCircle from 'react-native-progress-circle'
import { AppColors } from '../../../Constant/AppColors/AppColors'
import { moderateScaleVertical, textScale } from '../../../Utilities/AppSizeMegnesium'
import { styles } from './styles'
import axios from 'axios'

const AllScreen = () => {

  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://192.168.100.108:8080/products')
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }, []);

  const DeleteProduct = (id) => {
    try {
      const response = axios.delete(`http://192.168.100.108:8080/products/${id}`);
      if (response.data._id) {
        setProduct(Product.filter(p => p._id !== response.data._id));
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with a non-success status:', error.response.status, error.response.data);
      } else if (error.request) {
        console.error('No response received from the server:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };



  return (
    <View style={styles.Container}>
      {Product?.data?.map((product, index) => (
        <View key={index} style={styles.CardContainer}>
          <Card style={styles.TrendContainer}>
            <Card.Content style={styles.TrendContent}>
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
                <Text style={styles.TrendText}>{`${product.discountPercentage} Task`}</Text>
                <Text style={styles.TrendText}>{product.title}</Text>
                <TouchableOpacity onPress={() => DeleteProduct(product?._id)}>
                  <View style={styles.ButtonStyle}>
                    <Text style={[styles.TrendText, { color: AppColors.PrimaryWhite }]}>
                      Delete
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>
        </View>
      ))}
    </View>
  );


}

export default AllScreen

