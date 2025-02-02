import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "../screens/Login/Onboarding";
import { RecoverPassword } from "../screens/Login/RecoverPassword";
import { SignInScreen } from "../screens/Login/SignInScreen";
import { SignUpScreen } from "../screens/Login/SignUpScreen";

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            id={null} 
            initialRouteName="onboarding"
        >
            <Stack.Screen name="onboarding" component={Onboarding}/>
            <Stack.Screen name="recoverPassword" component={RecoverPassword}/>
            <Stack.Screen name="signInScreen" component={SignInScreen}/>
            <Stack.Screen name="signUpScreen" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}