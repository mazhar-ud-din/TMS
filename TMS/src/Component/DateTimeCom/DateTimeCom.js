import React, { useState } from "react";
import { Button, Image, StyleSheet, View,Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { create } from "react-test-renderer";
import { ImagesPath } from "../../Constant/ImagesPath/ImagesPath";
import { moderateScale, moderateScaleVertical } from "../../Utilities/AppSizeMegnesium";

const DateTimeCom =()=>{
    const date=new Date()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View style={styles.Container}>
        <Text> {  date.toDateString()}</Text>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Image source={ImagesPath.AddIc} style={styles.ImgStyle}/>
    </View>
  );
};

export default DateTimeCom;

const styles=StyleSheet.create({
    Container:{
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
    },
    ImgStyle:{
        height:moderateScaleVertical(20),
        width:moderateScale(20)
    }
})