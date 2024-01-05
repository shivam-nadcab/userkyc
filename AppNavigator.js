// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import OtpScreen from './Screen/OtpScreen';
import Details from './Screen/Details';
import KycOptionScreen from './Screen/KycOptionScreen';
import HomeScreen from './Screen/HomeScreen';
import PanCardVerification from './Screen/PanCardVerification';
import AadharCardVerification from './Screen/AadharCardVerification';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="DetailsScreen"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="KycOptionScreen"
        component={KycOptionScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PanCardVerification"
        component={PanCardVerification}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="AadharCardVerification"
        component={AadharCardVerification}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
