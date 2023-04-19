import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Avatar.Image
          size={150}
          source={require('../assests/Image/user.png')}
          style={{
            alignItems: 'center',
            width: 300,
            backgroundColor: 'white',
          }}
        />
        <Text style={styles.heading}>User Profile Details</Text>
        <View style={{gap: 10,marginVertical:40}}>
          <Text style={styles.TextArea}>Name: Siddhant Keshari</Text>
          <Text style={styles.TextArea}>Phone Number: +91 8922915545</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CropStock')}>
        <Text style={styles.buttonText}>Transaction History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    color:'black',
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
    backgroundColor: '#0dbd71',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width:'70%',
    marginTop:20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextArea: {
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
  },
});

export default UserProfile;
