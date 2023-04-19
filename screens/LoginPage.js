import React, {useEffect, useState, Image} from 'react';
import {Avatar} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const LoginPage = ({navigation}) => {
  const [phoneNo, setPhoneNo] = useState('');

  const handleLogin = () => {
    //send otp
    if (!phoneNo) {
      ToastAndroid.show('Please Enter Phone Number', ToastAndroid.BOTTOM);
    } else navigation.navigate('OtpScreen', {user: {phoneNo}});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Farmers Community</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setPhoneNo(text)}
        maxLength={10}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonTitle}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.footerLink}>Sign up</Text>
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
  ImagePic: {
    width: 110,
    height: 110,
    borderRadius: 24,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#0dbd71',
    width: '100%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
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

export default LoginPage;
