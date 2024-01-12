// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import OtpScreen from './Screen/OtpScreen';
import KycOptionScreen from './Screen/KycOptionScreen';
import HomeScreen from './Screen/HomeScreen';
import PanCardVerification from './Screen/PanCardScreens/PanCardVerification';
import DetailsScreen from './Screen/DetailsScreen';
import PanCardHomeScreen from './Screen/PanCardHomeScreen';
import MannualPanCard from './Screen/PanCardScreens/MannualPanCard';
import MannualAadharCard from './Screen/AadharCardScreens/MannualAadharCard';
import AadharCardVerification from './Screen/AadharCardScreens/AadharCardVerification';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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
        name="MannualPanCard"
        component={MannualPanCard}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="MannualAadharCard"
        component={MannualAadharCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
