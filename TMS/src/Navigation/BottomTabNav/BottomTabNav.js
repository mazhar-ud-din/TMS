import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { AppColors } from '../../Constant/AppColors/AppColors';
import { ImagesPath } from '../../Constant/ImagesPath/ImagesPath';
import { ChatScreen, ListScreen, OverViewScreen, ProfileScreen, ProjectScreen } from '../../Screen';
import { NavString } from '../NavString/NavString';
import { moderateScale, moderateScaleVertical } from '../../Utilities/AppSizeMegnesium';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName={NavString.LISTSCREEN}
            screenOptions={{
                tabBarActiveTintColor: AppColors.blue,
                headerShown: false,
                tabBarStyle: { height: 55 },
            }}
        >
            <Tab.Screen
                name={NavString.LISTSCREEN}
                component={ListScreen}
                options={{
                    tabBarLabel: '',
                    tabBarLabelStyle: { fontSize: 12, },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.ListIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavString.OVERVIEWSCREEN}
                component={OverViewScreen}
                options={{
                    tabBarLabel: '',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.FileIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavString.PROJECTSCREEN}
                component={ProjectScreen}
                options={{
                    tabBarLabel: '',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 15 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.AddIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.AppTheme : AppColors.AppTheme, height: 60, width: 60 }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavString.CHATSCREEN}
                component={ChatScreen}
                options={{
                    tabBarLabel: '',
                    tabBarLabelStyle: { fontSize: 12, },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.SendIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavString.PROFILESCREEN}
                component={ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarLabelStyle: { fontSize: 12, },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.UserIcon}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default BottomTabNav

const styles = StyleSheet.create({
    ImgStyle: {
        height: moderateScaleVertical(28),
        width: moderateScale(28),
        marginTop: moderateScaleVertical(10)
    }
})