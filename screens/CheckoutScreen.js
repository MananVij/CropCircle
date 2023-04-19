import * as React from 'react';
import {
  Appbar,
  Card,
  LeftContent,
  Title,
  Paragraph,
  Button,
  Provider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MarketComponent from '../Component/CustomItem';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Theme from '../assests/Theme/theme';
import { useNavigation } from '@react-navigation/native';
const CheckoutScreen = () => {
  const navigation = useNavigation()
  const _goBack = () => console.log('Went back');
  const _checkOut = () => {
    navigation.navigate("PaymentsScreen")
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Cart" />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      <View>
        <ScrollView backgroundColor='#EFFFF8'>
          <MarketComponent></MarketComponent>
          <MarketComponent></MarketComponent>
          <MarketComponent></MarketComponent>
          <MarketComponent></MarketComponent>
          <MarketComponent></MarketComponent>
        </ScrollView>
        {/* <Provider theme={Theme}> */}
        <View style={styles.cardStyle}>
          <Provider theme={Theme}>
            <Card backgroundColor="white">
              {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
              <Card.Content backgroundColor='#EFFFF8'>
                <View style={styles.rowStyle}>
                  <View>
                    <Title>Total Items:</Title>
                    <Paragraph>2</Paragraph>
                  </View>
                  <View>
                    <Title>Total Amount:</Title>
                    <Paragraph>₹500</Paragraph>
                  </View>
                </View>
              </Card.Content>
              {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
              <Card.Actions backgroundColor="#EFFFF8">
                <Button onPress={_checkOut}>
                  Proceed to Checkout
                </Button>
              </Card.Actions>
            </Card>
          </Provider>
        </View>
        {/* </Provider> */}
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
});
export default CheckoutScreen;
