import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { LoginScreen, RegisterScreen, SelectAuthScreen } from '../../Screen';
import BottomTabNav from '../BottomTabNav/BottomTabNav';
import { NavString } from '../NavString/NavString';

const Tab = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={NavString.SELECTAUTHSCREEN} component={SelectAuthScreen} /> 
      <Tab.Screen name={NavString.LOGINSCREEN} component={LoginScreen} /> 
      <Tab.Screen name={NavString.REGISTERSCREEN} component={RegisterScreen} /> 
      <Tab.Screen name={NavString.BOTTOMTAB} component={BottomTabNav} /> 
    </Tab.Navigator>
  );
}

export default MainNav