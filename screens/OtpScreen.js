import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginPage = ({navigation}) => {
  const route = useRoute()
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    //check otp
    //if correct otp
    const routes = navigation.getState()?.routes
    navigation.replace(routes[routes.length - 2]?.name == "LoginPage" ? "BottomNavigator" : 'SelectProfile' , {user: route?.params.user});
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
        <Text style={styles.buttonTitle}>Verify</Text>
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
