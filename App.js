import React, {useEffect, useState} from 'react';
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
import {PaymentScreen} from './screens/PaymentScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderContextProvider from './src/context/Order';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import {retrieveData} from './utils/localStorage';
import PostScreen from './screens/PostScreen';
import ViewTransactionScreen from './screens/ViewTransactionScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import SplashScreen from './screens/SplashScreen';

export const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const localUser = await retrieveData('user');
      setUser(localUser);
      setLoading(false);
    })();
  }, []);

  const Hello = () => {
    return (
      <OrderContextProvider>
        <BottomNavigator user={user} />
      </OrderContextProvider>
    );
  };

  return (
    <>
      {loading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              {user[0]?.user == undefined ? (
                <>
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
                    component={Hello}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="AddStoryPage"
                    component={AddStoryPage}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="MyOrdersScreen"
                    component={MyOrdersScreen}
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
                    name="ViewTransactionScreen"
                    component={ViewTransactionScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="CheckoutScreen"
                    component={CheckoutScreen}
                    options={{headerShown: false}}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="BottomNavigator"
                    component={Hello}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="AddStoryPage"
                    component={AddStoryPage}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="PostScreen"
                    component={PostScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="MyOrdersScreen"
                    component={MyOrdersScreen}
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
                    name="ViewTransactionScreen"
                    component={ViewTransactionScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="OtpScreen"
                    component={OtpScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="CheckoutScreen"
                    component={CheckoutScreen}
                    options={{headerShown: false}}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
};

const Stack = createStackNavigator();
export default App;

const styles = StyleSheet.create({});
