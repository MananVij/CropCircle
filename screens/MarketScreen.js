import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MarketComponent from '../Component/CustomItem';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Appbar,
  Button,
  MD2Colors,
  Searchbar,
} from 'react-native-paper';
import ActionSheet, {
  SheetManager,
  SheetProvider,
  registerSheet,
} from 'react-native-actions-sheet';
import theme from '../assests/Theme/theme';
import BottomScreen from './BottomScreen';
import {OrderContext} from '../src/context/Order';
import {getData} from '../utils/Data';
import colors from '../assests/Theme/colors';

const MarketScreen = props => {
  // const {crops, setCrops} = props;
  registerSheet('example-sheet', BottomScreen);
  const [selected, setSelected] = useState('');
  const [crops, setCrops] = useState([]);
  const {user} = props;

  useEffect(() => {
    (async () => {
      const crops = await getData('/crop', user[0]?.token, 'crops', false);
      setCrops(crops?.data);
    })();
  }, []);
  
  return (
    <>
      {crops?.length == 0 ? (
        <>
          <ActivityIndicator
            animating={true}
            size={'small'}
            color={MD2Colors.green600}
            style={{justifyContent: 'center', flexDirection: 'column', flex: 1}}
          />
        </>
      ) : (
        <>
          <SheetProvider>
            <SafeAreaView style={styles.container}>
              <SheetProvider>
                <ActionSheet>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: '3%',
                      marginHorizontal: '2%',
                    }}>
                    {crops?.map((el, idx) => {
                      return (
                        <View
                          key={idx}
                          style={{
                            flexWrap: 'wrap',
                            marginHorizontal: '2%',
                          }}>
                          <Button
                            onPress={() => {
                              if (selected == el.cropName) setSelected('');
                              else setSelected(el.cropName);
                            }}
                            mode={
                              selected == el.cropName ? 'contained' : 'outlined'
                            }
                            style={styles.button}>
                            {el.cropName}
                          </Button>
                        </View>
                      );
                    })}
                  </View>
                </ActionSheet>
                {/* <BottomScreen crops={crops} /> */}
                {/* {BottomScreen(crops)} */}
              </SheetProvider>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: '2.5%',
                }}>
                <Searchbar
                  theme={theme}
                  placeholder="Search"
                  icon={'magnify'}
                  style={{width: '90%'}}
                  // onChangeText={onChangeSearch}
                  // value={searchQuery}
                />
                <Appbar.Action
                  icon="filter"
                  onPress={() => {
                    SheetManager.show('example-sheet');
                  }}
                />
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginBottom: '2%'}}>
                {crops?.map((el, idx) => {
                  return (
                    <View
                      key={idx}
                      style={
                        {
                          // backgroundColor: colors.cardColor,
                          // borderRadius: 20,
                          // shadowColor: 'grey',
                          // elevation: 200,
                          // marginVertical: '1%'
                        }
                      }>
                      <MarketComponent
                        el={el}
                        crops={crops}
                        setCrops={setCrops}
                        // setItemQty={props['setItemQty']}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </SheetProvider>
        </>
      )}
    </>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    paddingHorizontal: '4%',
    paddingVertical: '2.5%',
    flex: 1,
  },
});
