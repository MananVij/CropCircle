import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import { getData } from '../utils/Data';
import { DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ViewTransactionScreen(props) {
  const [myTrans, setMyTrans] = useState([]);
  const {user} = props?.route.params

  useEffect(() => {
    (async() => {
        const trans = await getData('/transaction', user[0]?.token, 'trans', false);
        setMyTrans(trans?.data)
        console.log(myTrans)
    })()
  },[])
  return (
    <>
      <DataTable style={{padding: 15, flex: 1}}>
        <Text style={{fontSize: 25, color: 'black'}}>My Transactions</Text>
        <DataTable.Header>
          <DataTable.Title>Crop</DataTable.Title>
          <DataTable.Title >Buyer</DataTable.Title>
          <DataTable.Title numeric>Weight(QT)</DataTable.Title>
          <DataTable.Title numeric>Amount(₹)</DataTable.Title>
        </DataTable.Header>

        {/* {myCrops?.map(el => {
          if (el?.weight > 0)
            return (
              <DataTable.Row>
                <DataTable.Cell>{el?.cropName}</DataTable.Cell>
                <DataTable.Cell numeric>{el?.weight}</DataTable.Cell>
                <DataTable.Cell numeric>{el?.price}</DataTable.Cell>
              </DataTable.Row>
            );
        })} */}
      </DataTable>
    </>
  );
}

const styles = StyleSheet.create({
});
