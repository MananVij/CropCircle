import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D7051',
      }}>
      <Image
        source={require('../assests/Image/logo.png')}
        style={styles.image}></Image>
      {/* <Text>SplashScreen</Text> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
});
