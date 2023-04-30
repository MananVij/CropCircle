import React, {useState, useEffect} from 'react';
import {DataTable, Button} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getData} from '../utils/Data';

const optionsPerPage = [2, 3, 4];

const CropSctock = props => {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  const {user} = props?.route.params;
  const [myCrops, setMyCrops] = useState([]);
  // const navigation = useNavigation();

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    (async () => {
      const allCrops = await getData(
        '/crop/seller',
        user[0]?.token,
        'crops',
        false,
      );
      setMyCrops(allCrops?.data);
    })();
  }, []);
  return (
    <>
      <DataTable style={{padding: 15, flex: 1}}>
        <Text style={{fontSize: 25, color: 'black'}}>Remaining Crops</Text>
        <DataTable.Header>
          <DataTable.Title>Crop</DataTable.Title>
          <DataTable.Title numeric>Weight(QT)</DataTable.Title>
          <DataTable.Title numeric>Price(QT)</DataTable.Title>
        </DataTable.Header>

        {myCrops?.map(el => {
          if (el?.weight > 0)
            return (
              <DataTable.Row>
                <DataTable.Cell>{el?.cropName}</DataTable.Cell>
                <DataTable.Cell numeric>{el?.weight}</DataTable.Cell>
                <DataTable.Cell numeric>{el?.price}</DataTable.Cell>
              </DataTable.Row>
            );
        })}
      </DataTable>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CropSellReq', {user});
        }}>
        <Text style={styles.buttonTitle}>Add Crop</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0dbd71',
    width: '75%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    marginLeft: '12%',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
export default CropSctock;
