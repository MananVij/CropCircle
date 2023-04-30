import React, {useState, useEffect, useContext} from 'react';
import {
  Appbar,
  Card,
  LeftContent,
  Title,
  Paragraph,
  Button,
  Provider,
  Text,
} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MarketComponent from '../Component/CustomItem';
import {View, StyleSheet, ScrollView} from 'react-native';
import Theme from '../assests/Theme/theme';
import {useNavigation} from '@react-navigation/native';
import CheckoutItemCard from '../Component/CheckoutItemCard';
import {OrderContext} from '../src/context/Order';
import theme from '../assests/Theme/theme';
import {postCrop, postData} from '../utils/Data';
import colors from '../assests/Theme/colors';
const CheckoutScreen = props => {
  const {order, setOrder} = useContext(OrderContext);
  const navigation = useNavigation();
  const _goBack = () => console.log('Went back');
  const _checkOut = () => {
    navigation.navigate('PaymentsScreen');
  };

  const [totalItems, setTotalItems] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const {user} = props;
  useEffect(() => {
    let totalIt = 0;
    let totalVal = 0;
    order?.map(el => {
      totalIt = totalIt + el.qty;
      totalVal = totalVal + el.qty * el.price;
    });
    setTotalItems(totalIt);
    setTotalValue(totalVal);
  }, [order]);

  const handleCheckout = async () => {
    navigation.navigate('PaymentScreen', {user, order, totalValue});
    // let responses = [];
    // order.map(async el => {
    //   const res = await postCrop('/transaction/createTransaction', user[0]?.token, {
    //     quantity: el?.qty,
    //     amount: el?.qty * el?.price,
    //     crop_id: el?._id,
    //     buyer_id: user[0]?.user._id,
    //     seller_id: el?.uid._id,
    //   });
    //   responses.push("res", res);
    // });
    setOrder([]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ScrollView style={styles.container}> */}
        {order?.map((el, idx) => {
          return (
            <View key={idx}>
              <CheckoutItemCard
                order={order}
                setOrder={setOrder}
                item={el}></CheckoutItemCard>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.totalContainer}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.textTotal}>Total Items: </Text>
            <Text style={styles.text}>{totalItems}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.textTotal}>Total: </Text>
            <Text style={styles.text}>{totalValue}</Text>
          </View>
        </View>
        <Button
          style={{justifyContent: 'center'}}
          theme={theme}
          mode="contained"
          onPress={async () => {
            await handleCheckout();
          }}>
          Proceed to Checkout
        </Button>
      </View>
    </View>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },

  cardStyle: {
    backgroundColor: 'white',
    bottom: 0,
    height: 80,
    width: '100%',
    position: 'absolute',
    marginRight: 20,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 110,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
  textTotal: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '3%',
    marginHorizontal: '5%',
    borderRadius: 20,
    backgroundColor: '#EFFFF8',
    marginBottom: '2%',
    marginVertical: '1%',
    elevation: 5,
  },
});
export default CheckoutScreen;
