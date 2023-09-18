import React, { useState } from "react";
import { Button, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { create } from "react-test-renderer";
import { ImagesPath } from "../../Constant/ImagesPath/ImagesPath";
import { moderateScale, moderateScaleVertical } from "../../Utilities/AppSizeMegnesium";
import { AppColors } from "../../Constant/AppColors/AppColors";

const DateTimeCom = () => {
  const date = new Date()
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
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.Container}>
        <Text style={{ color: AppColors.PrimaryBlack, fontWeight: 'bold' }}> {date.toDateString()}</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={{ marginLeft: 8 }}>
          <Image source={ImagesPath.CalenderIc} style={styles.ImgStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DateTimeCom;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgStyle: {
    height: moderateScaleVertical(20),
    width: moderateScale(20),
  }
})