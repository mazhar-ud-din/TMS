import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { AllScreen, CompleteScreen, GoingScreen, LoginScreen, RegisterScreen, SelectAuthScreen } from '../../Screen';
import ConversationScreen from '../../Screen/UserScreen/ConversationScreen/ConversationScreen';
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
      <Tab.Screen name={NavString.CONVERSATION} component={ConversationScreen} />
      <Tab.Screen name={NavString.ALLSCREEN} component={AllScreen} />
      <Tab.Screen name={NavString.GOINGSCREEN} component={GoingScreen} />
      <Tab.Screen name={NavString.COMPLETESCREEN} component={CompleteScreen} />
    </Tab.Navigator>
  );
}

export default MainNav