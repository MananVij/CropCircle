import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, Button, MD2Colors} from 'react-native-paper';
import {postData} from '../utils/Data';
import {storeDataLocally} from '../utils/localStorage';

const OtpScreen = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const {name, phoneNo} = props?.route.params;

  async function confirmCode() {
    try {
      await confirm.confirm(otp);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  useEffect(() => {
    (async () => {
      await signInWithPhoneNumber();
    })();
  }, []);

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNo}`);
    setOtpSent(true);
    setConfirm(confirmation);
  }

  const handleLogin = async () => {
    await confirmCode();
    if (confirm) {
      const routes = navigation.getState()?.routes;
      if (routes[routes.length - 2]?.name == 'LoginPage') {
        const res = await postData('/user/login', {phoneNo});
        await storeDataLocally('user', res);
        navigation.replace('BottomNavigator', {user: res});
      } else navigation.replace('SelectProfile', {user: {name, phoneNo}});

      navigation.replace(
        routes[routes.length - 2]?.name == 'LoginPage'
          ? 'BottomNavigator'
          : 'SelectProfile',
        {user: res},
      );
    } else ToastAndroid.show('invalid Code', ToastAndroid.BOTTOM);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setOtp(text)}
        value={otp}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <ActivityIndicator
          size="small"
          style={{display: !otpSent ? 'flex' : 'none'}}
          color={MD2Colors.white}
          animating={!otpSent}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
            display: otpSent ? 'flex' : 'none',
          }}>
          Verify
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Didn't receive the otp?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.footerLink}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 16,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0dbd71',
    width: '100%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    // marginLeft: '10%'
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  footerText: {
    color: '#333333',
    fontSize: 16,
  },
  footerLink: {
    color: '#0dbd71',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default OtpScreen;
