import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {postCrop, postData} from '../utils/Data';

const CropSellReq = props => {
  const navigation = useNavigation();
  const [cropName, setCropName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const {user} = props?.route.params;

  const handleSubmission = async () => {
    const res = await postCrop('/crop/createcrop', user[0]?.token, {
      cropName,
      weight,
      price,
      uid: user[0]?.user._id,
    });
    if (res?.message == 'Successfully Created a crop')
      navigation.navigate('CropStock', {user});
    else ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
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
        value={cropName}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (QT)"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (QT)"
        placeholderTextColor="#AAAAAA"
        onChangeText={text => setPrice(text)}
        value={price}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await handleSubmission();
        }}>
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
