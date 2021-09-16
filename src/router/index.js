import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chatting, Dashboard, Konfirmasi, Messages, Profile, Signin, SplashScreen } from '../pages';
import { BottomNavigator } from '../components';
import PoliAnak from '../pages/PoliAnak';
import PoliIbu from '../pages/PoliIbu';
import DetailIbu from '../pages/DetailIbu';
import DetailAnak from '../pages/DetailAnak';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
         <Tab.Screen name="Dashboard" component={Dashboard}/>
         <Tab.Screen name="Messages" component={Messages} />
         <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}


const Router = () => {
    return (
<Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Messages"
                component={Messages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Konfirmasi"
                component={Konfirmasi}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PoliAnak"
                component={PoliAnak}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PoliIbu"
                component={PoliIbu}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DetailIbu"
                component={DetailIbu}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DetailAnak"
                component={DetailAnak}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
