import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import UserProfile from './screens/UserPage';
import OtpScreen from './screens/OtpScreen';
import SelectProfile from './screens/SelectProfile';
import AddressSc from './screens/AddressSc';
import AddStoryPage from './screens/AddStoryPage';
import CropStock from './screens/CropStock';
import CropSellReq from './screens/CropSellReq';
import BottomNavigator from './Component/BottomNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomItem from './Component/CustomItem';
import MarketScreen from './screens/MarketScreen';
import {PaymentScreen} from './screens/PaymentsScreen';
import CheckoutScreen from './screens/CheckoutScreen';

import {
  StripeProvider,
  CardField,
  useStripe,
} from '@stripe/stripe-react-native';

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SelectProfile"
            component={SelectProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddressSc"
            component={AddressSc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddStoryPage"
            component={AddStoryPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CropStock"
            component={CropStock}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CropSellReq"
            component={CropSellReq}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MarketScreen"
            component={MarketScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const Stack = createStackNavigator();
export default App;

const styles = StyleSheet.create({});
