import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  TouchableRipple,
  IconButton,
  MD3Colors,
  Text,
  Button,
} from 'react-native-paper';
import theme1 from '../assests/Theme/theme1';
import theme from '../assests/Theme/theme';
import {useNavigation} from '@react-navigation/native';
import {OrderContext} from '../src/context/Order';

const CheckoutItemCard = props => {
  const {item, order, setOrder} = props;
  const [Counter, setCounter] = useState(0);

  const handleOnIncrement = () => {
    setCounter(item?.qty + 1);
    if (order.length) {
      const idx = order?.findIndex(orderItem => {
        return (
          item.cropName == orderItem.cropName &&
          item.phoneNo == orderItem.phoneNo
        );
      });
      if (idx != -1) {
        order[idx].qty = item?.qty + 1;
        setOrder(order);
      } else {
        const updatedOrder = [...order, {...item, qty: item?.qty + 1}];
        setOrder(updatedOrder);
      }
    } else {
      setOrder([{...item, qty: item?.qty + 1}]);
    }
  };

  const handleOnDecrement = () => {
    if (item?.qty > 0) {
      setCounter(item?.qty - 1);
      const idx = order?.findIndex(orderItem => {
        return (
          item.cropName == orderItem.cropName &&
          item.phoneNo == orderItem.phoneNo
        );
      });
      if (item?.qty - 1 == 0) {
        order.pop(idx);
      } else {
        order[idx].qty = item?.qty - 1;
      }
      setOrder(order);
    }
  };

  return (
    <View>
      {item?.qty > 0 ? (
        <>
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <Image
              source={require('../assests/Image/crop.jpg')}
              style={styles.ImagePic}
            />
            <View style={styles.ContactDetails}>
              <View style={{gap: 5, fontSize: 20, marginLeft: '5%'}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {' '}
                  Crop: {item.cropName}
                </Text>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {' '}
                  Name: {item.uid.name}
                </Text>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {' '}
                  Phone Number: {item.uid.phoneNo}
                </Text>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {' '}
                  Price Per 10KG: ₹400
                </Text>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {' '}
                  Total Price: {item.qty * item.price}
                </Text>
              </View>
              <View style={styles.btn}>
                <IconButton
                  icon="minus"
                  iconColor="white"
                  size={15}
                  backgroundColor="#0dbd71"
                  onPress={() => {
                    handleOnDecrement(item);
                  }}
                />
                <Text style={styles.BtnValue}>{item?.qty}</Text>
                <IconButton
                  icon="plus"
                  iconColor="white"
                  size={15}
                  backgroundColor="#0dbd71"
                  onPress={() => {
                    handleOnIncrement(item);
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CheckoutItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '1%',
    paddingHorizontal: '2%',
    paddingVertical: '3%',
    borderRadius: 20,
    backgroundColor: '#F6FBF4',
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
