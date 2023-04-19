import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MarketComponent from '../Component/CustomItem';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
const MarketScreen = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Market Place" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView style={{backgroundColor: '#EFFFF8'}}>
        <MarketComponent></MarketComponent>
        <MarketComponent></MarketComponent>
        <MarketComponent></MarketComponent>
        <MarketComponent></MarketComponent>
        <MarketComponent></MarketComponent>
        <MarketComponent></MarketComponent>
      </ScrollView>
    </>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({});
