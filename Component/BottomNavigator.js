import React, {useState, useEffect, useContext} from 'react';
import {BottomNavigation, Text, Provider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Image, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CustomItem from './CustomItem';
import MarketScreen from '../screens/MarketScreen';
import UserProfile from '../screens/UserPage';
import CheckoutScreen from '../screens/CheckoutScreen';
import Theme from '../assests/Theme/theme';
import {useRoute} from '@react-navigation/native';
import {OrderContext} from '../src/context/Order';
import colors from '../assests/Theme/colors';

export default function BottomNavigator(props) {
  const [crops, setCrops] = useState([]);
  const {user} = props

  const shopRoute = () => <MarketScreen crops={crops} setCrops={setCrops} user={user} ></MarketScreen>;
  const communityRoute = () => <HomeScreen user={user}></HomeScreen>;
  const userprofile = () => <UserProfile user={user}></UserProfile>;
  const checkoutPage = () => <CheckoutScreen user={user}></CheckoutScreen>;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'community',
      title: 'Community',
      focusedIcon: 'account-group',
      unfocusedIcon: 'account-group-outline',
    },
    {
      key: 'shop',
      title: 'Shop',
      focusedIcon: 'shopping',
      unfocusedIcon: 'shopping-outline',
    },
    {
      key: 'checkoutPage',
      title: 'Cart',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
    },
    {
      key: 'UserPage',
      title: 'User Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    shop: shopRoute,
    community: communityRoute,
    UserPage: userprofile,
    checkoutPage: checkoutPage,
  });

  return (
    <SafeAreaProvider style={{backgroundColor: colors.bgColor}}>
      <BottomNavigation
        theme={{colors: {secondaryContainer: '#0dbd71'}}}
        barStyle={{
          height: '10%',
          backgroundColor: '#EFFFF8',
          marginHorizontal: '2%',
          marginBottom: '3%',
          borderRadius: 40,
          paddingHorizontal: '5%',
          paddingBottom: '5%',
          overflow: 'hidden'
        }}
        style={{backgroundColor: 'transparent'}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
