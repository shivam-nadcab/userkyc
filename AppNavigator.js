// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import OtpScreen from './Screen/OtpScreen';
import KycOptionScreen from './Screen/KycOptionScreen';
import HomeScreen from './Screen/HomeScreen';
import PanCardVerification from './Screen/PanCardVerification';
import AadharCardVerification from './Screen/AadharCardVerification';
import DetailsScreen from './Screen/DetailsScreen';
import PanCardHomeScreen from './Screen/PanCardHomeScreen';
import Pan from './Screen/Pan';
import Pan2 from './Screen/Pan2';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Pan2">
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
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
      <Stack.Screen
        name="PanCardHomeScreen"
        component={PanCardHomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Pan"
        component={Pan}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Pan2"
        component={Pan2}
        options={{ headerShown: false }}
      />
     
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
