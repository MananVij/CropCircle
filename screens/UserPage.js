import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Avatar, IconButton, Text} from 'react-native-paper';
import {clearStorage} from '../utils/localStorage';
import colors from '../assests/Theme/colors';

const UserProfile = props => {
  const {user} = props;
  const navigation = useNavigation();

  const handleLogout = async () => {
    await clearStorage('user');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'LoginPage'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Avatar.Image
          size={150}
          source={require('../assests/Image/user.png')}
          style={{
            alignItems: 'center',
            width: 300,
            backgroundColor: 'transparent',
            alignSelf: 'center',
          }}
        />
        {/* <Text style={styles.heading}>User Profile Details</Text> */}
        <View style={{gap: 10, marginVertical: 40, alignItems: 'center'}}>
          <Text style={styles.TextArea}>{user[0].user.name}</Text>
          <Text style={styles.TextAreaNo}>{user[0].user.phoneNo}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('MyOrdersScreen', {user: props?.user});
        }}>
        <IconButton
          iconColor="black"
          style={{padding: 0, margin: 0}}
          icon={'notebook'}
        />
        <Text style={styles.buttonText}>Orders</Text>
      </TouchableOpacity>
      <View style={{borderBottomColor: 'grey', borderBottomWidth: 0.2}} />
      {user[0]?.user.isBuyer ? (
        <></>
      ) : (
        <>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ViewTransactionScreen', {user: props?.user});
            }}>
            <IconButton
              iconColor="black"
              style={{padding: 0, margin: 0}}
              icon={'cash'}
            />
            <Text style={styles.buttonText}>Transactions</Text>
          </TouchableOpacity> */}
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 0.2}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('CropStock', {user: props?.user});
            }}>
            <IconButton
              iconColor="black"
              style={{padding: 0, margin: 0}}
              icon={'rice'}
            />
            <Text style={styles.buttonText}>Crops</Text>
          </TouchableOpacity>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 0.2}} />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <IconButton
          iconColor="black"
          style={{padding: 0, margin: 0}}
          icon={'logout'}
        />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    backgroundColor: colors.bgColor,
  },
  heading: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  profile: {
    flexDirection: 'row',
    marginBottom: 10,
    textAlign: 'left',
    borderWidth: 2,
    borderColor: 'red',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginHorizontal: '2%',
    paddingBottom: '4%',
    marginTop: '2%',
    flexDirection: 'row',
    includeFontPadding: false,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    margin: 0,
    padding: 0,
  },
  TextArea: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  TextAreaNo: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
});

export default UserProfile;
