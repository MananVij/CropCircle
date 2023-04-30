import React, {useState, useEffect} from 'react';
import {DataTable, Text, Dialog, Portal, Provider} from 'react-native-paper';
import {View} from 'react-native';
import {getData} from '../utils/Data';

const optionsPerPage = [2, 3, 4];

const MyOrdersScreen = props => {
  const {user} = props?.route.params;
  const [myOrders, setMyOrders] = useState([]);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    (async () => {
      const allOrders = await getData(
        '/transaction',
        user[0]?.token,
        'crops',
        false,
      );
      setMyOrders(allOrders?.data);
      myOrders?.map(el => {
        console.log(
          el.amount,
          el.seller_id.name,
          el.crop_id.cropName,
          el.quantity,
        );
      });
    })();
  }, []);

  const myDialog = name => {
    return (
      <Provider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Content>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{name}</Text>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
  };

  return (
    <>
      <DataTable style={{padding: 15, flex: 1}}>
        <Text style={{fontSize: 25, color: 'black'}}>My Orders</Text>
        <DataTable.Header>
          <DataTable.Title>Crop</DataTable.Title>
          <DataTable.Title numeric>Seller Name</DataTable.Title>
          <DataTable.Title numeric>Amount(QT)</DataTable.Title>
          <DataTable.Title numeric>Weight(QT)</DataTable.Title>
        </DataTable.Header>

        {myOrders?.map(el => {
          return (
            <>
              <DataTable.Row>
                <DataTable.Cell>{el?.crop_id.cropName}</DataTable.Cell>
                <DataTable.Cell onPress={showDialog}>
                  {el?.seller_id.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{el?.amount}</DataTable.Cell>
                <DataTable.Cell numeric>{el?.quantity}</DataTable.Cell>
              </DataTable.Row>
              {myDialog(el?.seller_id.name)}
            </>
          );
        })}
      </DataTable>
    </>
  );
};

export default MyOrdersScreen;
