import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, Title} from 'react-native-paper';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import {useRoute} from '@react-navigation/native';

export default function SelectProfile({navigation}) {
  const {height, width} = useWindowDimensions();
  const [isBuyer, setIsBuyer] = useState(null);
  const route = useRoute();
  const handleSubmission = () => {
    if (isBuyer != null) {
      navigation.navigate('AddressSc', {
        user: {...route.params.user, isBuyer: isBuyer},
      });
    } else {
      ToastAndroid.show('Select Profile', ToastAndroid.BOTTOM);
    }
  };

  const genderCard = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Card
            onPress={() => {
              setIsBuyer(1);
            }}
            style={{
              borderRadius: 15,
              width: width * 0.4,
              height: height * 0.27,
              backgroundColor: isBuyer ? '#ff932b' : 'white',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assests/Image/Buyer.png')}
                resizeMode={'contain'}
                style={{
                  height: height * 0.11,
                  width: width * 0.7,
                  marginTop: 40,
                }}
              />
              <Text
                style={{paddingTop: '10%', fontWeight: '600', fontSize: 16}}>
                Buyer
              </Text>
            </View>
          </Card>
          <Card
            style={{
              borderRadius: 15,
              width: width * 0.4,
              height: height * 0.27,
              backgroundColor: isBuyer == 0 ? '#ff932b' : 'white',
            }}
            onPress={() => {
              setIsBuyer(0);
            }}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assests/Image/Seller.png')}
                resizeMode={'contain'}
                style={{
                  height: height * 0.11,
                  width: width * 0.7,
                  marginTop: 40,
                }}
              />
              <Text
                style={{paddingTop: '10%', fontWeight: '600', fontSize: 16}}>
                Seller
              </Text>
            </View>
          </Card>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{paddingHorizontal: '5%', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            marginTop: '8%',
            marginLeft: '2%',
            marginBottom: '5%',
          }}>
          Who are you?
        </Text>
        {genderCard()}
        <Button
          mode="contained"
          style={styles.SubmitBtn}
          onPress={handleSubmission}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SubmitBtn: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#ff932b',
    textAlign: 'center',
    fontColor: 'white',
  },
});
