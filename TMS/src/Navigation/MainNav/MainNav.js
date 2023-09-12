import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { AppColors } from '../../Constant/AppColors/AppColors';
import { ImagesPath } from '../../Constant/ImagesPath/ImagesPath';
import { HistoryScreen, HomeScreen, LearnScreen, NoteScreen, PortfolioScreen } from '../../Screen';
import { NavigationString } from '../NavigationString/NavigationString';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName={NavigationString.HOMESCREEN}
            screenOptions={{
                tabBarActiveTintColor: AppColors.blue,
                headerShown: false,
                tabBarStyle: { height: 65, justifyContent: 'center' },
            }}
        >
            <Tab.Screen
                name={NavigationString.LEARNSCREEN}
                component={LearnScreen}
                options={{
                    tabBarLabel: 'Learn',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.LearnIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.HOMESCREEN}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.HomeIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />           
            <Tab.Screen
                name={NavigationString.PORTFOLIO}
                component={PortfolioScreen}
                options={{
                    tabBarLabel: 'Portfolio',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.PortIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.HISTORYSCREEN}
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.HistoryIc}
                            style={[styles.ImgStyle, { tintColor: focused ? AppColors.blue : AppColors.PrimaryBlack }]} />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.NOTESCREEN}
                component={NoteScreen}
                options={{
                    tabBarLabel: 'Notes',
                    tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) => (
                        <Image source={ImagesPath.NoteIc}
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
        height: 22,
        width: 22,
    }
})