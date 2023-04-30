import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  IconButton,
  Text,
  MD2Colors,
} from 'react-native-paper';
import {OrderContext} from '../src/context/Order';
import colors from '../assests/Theme/colors';

const CustomItem = props => {
  const {order, setOrder} = useContext(OrderContext);
  const {el} = props;
  const [Counter, setCounter] = useState(0);

  const handleOnIncrement = () => {
    setCounter(Counter + 1);
    if (order.length) {
      const idx = order?.findIndex(orderItem => {
        return (
          el.cropName == orderItem.cropName && el.phoneNo == orderItem.phoneNo
        );
      });
      if (idx != -1) {
        order[idx].qty = Counter + 1;
        setOrder(order);
      } else {
        const updatedOrder = [...order, {...el, qty: Counter + 1}];
        setOrder(updatedOrder);
      }
    } else {
      setOrder([{...el, qty: Counter + 1}]);
    }
  };

  const handleOnDecrement = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
      const idx = order?.findIndex(orderItem => {
        return (
          el.cropName == orderItem.cropName && el.phoneNo == orderItem.phoneNo
        );
      });
      if (Counter - 1 == 0) {
        order.pop(idx);
      } else {
        order[idx].qty = Counter - 1;
      }
      setOrder(order);
    }
  };

  return (
    // <View style={styles.outerStyle}>
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image
        source={require('../assests/Image/crop.jpg')}
        style={styles.ImagePic}
      />
      <View style={styles.ContactDetails}>
        <View style={{gap: 5, fontSize: 20, marginLeft: '5%'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Black',
              color: MD2Colors.black,
            }}>
            {el.cropName.toUpperCase()}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: '100'}}>₹ </Text>
              <Text style={{fontSize: 17, fontFamily: 'Montserrat-ExtraBold'}}>
                {el.price}
                {''}
              </Text>
            </View>
            <Text style={{fontSize: 13, fontFamily: 'Poppins-Bold'}}>/QT</Text>
          </View>
          {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            Name: {el.uid.name}
          </Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            {' '}
            Phone Number: {el.uid.phoneNo}
          </Text> */}
        </View>
      </View>
      <View style={styles.btn}>
        <IconButton
          icon="plus"
          iconColor="white"
          size={15}
          backgroundColor="#0dbd71"
          onPress={() => {
            handleOnIncrement();
          }}
        />
        <Text style={styles.BtnValue}>{Counter}</Text>
        <IconButton
          icon="minus"
          iconColor="white"
          size={15}
          backgroundColor="#0dbd71"
          onPress={() => {
            handleOnDecrement();
          }}
        />
      </View>
    </TouchableOpacity>
    // </View>
  );
};

export default CustomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '2%',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    borderRadius: 20,
    backgroundColor: colors.cardColor,
    elevation: 2,
    justifyContent: 'space-between',
  },

  ImagePic: {
    width: 110,
    height: 110,
    borderRadius: 25,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    alignSelf: 'center',
    // flexDirection: 'row',
    // justifyContent: 'center'
  },
  btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    borderStyle: 'dashed',
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
    fontFamily: 'Poppins-Medium',
  },
});
