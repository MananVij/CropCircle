import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CropSellReq = ({navigation}) => {
  const [Cropname, setCropName] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmission = () => {
    navigation.navigate('CropStock');
    // Write your sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Crop for Selling!</Text>
      <TextInput
        style={styles.input}
        placeholder="Crop Name"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setCropName(text)}
        value={Cropname}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight of the Crop (QT)"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
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
    color: '#ff932b',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default CropSellReq;
