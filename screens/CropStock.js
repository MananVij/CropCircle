import * as React from 'react';
import {DataTable, Button} from 'react-native-paper';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const optionsPerPage = [2, 3, 4];

const CropSctock = ({navigation}) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  // const navigation = useNavigation();

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <DataTable style={{padding: 15, flex: 1}}>
        <Text style={{fontSize: 25, color: 'black'}}>Remaining Crops</Text>
        <DataTable.Header>
          <DataTable.Title>Crop</DataTable.Title>
          <DataTable.Title numeric>Weight(QT)</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>A</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>B</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={page => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CropSellReq');
        }}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
});
export default CropSctock;
