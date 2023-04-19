import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TouchableRipple, IconButton, MD3Colors, Text} from 'react-native-paper';

const CustomItem = () => {
  const [Counter, setCounter] = useState(0);
  const handleOnIncrement = () => {
    setCounter(Counter + 1);
  };
  console.log(Counter);
  const handleOnDecrement = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };

  return (
    <View style={styles.outerStyle}>
    <View style={styles.container}>
      <Image
        source={require('../assests/Image/crop.jpg')}
        style={styles.ImagePic}
      />
      <View style={styles.ContactDetails}>
        <View style={{gap: 5, fontSize: 20}}>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}> Crop: Wheat</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            {' '}
            Name: Siddhant Keshari
          </Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            {' '}
            Phone Number: +91 8922915545
          </Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            {' '}
            Price Per 10KG: ₹400
          </Text>
        </View>
        <View style={styles.btn}>
          <IconButton
            icon="minus"
            iconColor="white"
            size={15}
            backgroundColor="#0dbd71"
            onPress={handleOnDecrement}
          />
          <Text style={styles.BtnValue}>{Counter}</Text>
          <IconButton
            icon="plus"
            iconColor="white"
            size={15}
            backgroundColor="#0dbd71"
            onPress={handleOnIncrement}
          />
        </View>
      </View>
    </View>
    </View>
  );
};

export default CustomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'white',
  
    marginVertical: 1,
    borderWidth:0.3,
    borderBottomColor:'white',
    padding: 20,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'white',

  },
  
  ImagePic: {
    width: 110,
    height: 110,
    borderRadius: 24,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ContactDetails: {
    justifyContent: 'center',
    padding: 10,
    gap: 5,
  },
  increment: {
    backgroundColor: 'green',
    width: 50,
  },
  BtnValue: {
    color: 'black',
    fontSize: 15,
  },
});
