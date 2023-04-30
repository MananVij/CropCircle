import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StoryBox from '../Component/StoryBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  AnimatedFAB,
  FAB,
  MD2Colors,
  Portal,
  TextInput,
} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {storeDataLocally} from '../utils/localStorage';
import colors from '../assests/Theme/colors';
import SplashScreen from './SplashScreen';

export default function HomeScreen(props) {
  const navigation = useNavigation();
  const [extended, setExtended] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user} = props;

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setExtended(currentScrollPosition <= 0);
  };
  const route = useRoute();
  const handleClick = () => {
    navigation.navigate('AddStoryPage', {user: user, setPosts});
  };
const man = process.env
  const getAllPosts = async () => {
    console.log('my post', man.BASE_URL)
    // console.log(user[0]?.token)
    await fetch(`${process.env.BASE_URL}/post`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user[0]?.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(async res => {
        await storeDataLocally('posts', res);
        setPosts(res?.data);
      })
      .catch(e => {
        // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
        console.log(e, 'error', e.code);
      });
  };

  useEffect(() => {
    (async () => {
      await getAllPosts();
      setLoading(false);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
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
          <ScrollView
            onScroll={onScroll}
            style={{
              // marginHorizontal: '1.5%',
              paddingBottom: '20%',
            }}>
            <View
              style={{
                height: '17%',
                backgroundColor: colors.cardColor,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                marginHorizontal: '4%',
                justifyContent: 'center',
                paddingLeft: '5%',
                elevation: 40,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  color: MD2Colors.black,
                }}>
                Welcome Back
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '600',
                  marginTop: '2.5%',
                  fontFamily: 'Poppins-Black',
                  color: MD2Colors.black,
                }}>
                {user[0]?.user.name} !
              </Text>
            </View>
            <View
              onScroll={onScroll}
              style={{
                marginHorizontal: '1.5%',
                marginVertical: '2%',
                marginBottom: '42%',
              }}>
              {posts?.map((el, idx) => {
                return (
                  <View key={idx}>
                    <StoryBox
                      setPosts={setPosts}
                      post={el}
                      user={user}></StoryBox>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <AnimatedFAB
            color="white"
            icon={'checkbox-multiple-blank-circle-outline'}
            label={'Circle'}
            extended={extended}
            onPress={handleClick}
            visible={true}
            animateFrom={'right'}
            iconMode={'dynamic'}
            style={[styles.fabStyle]}
          />
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.bgColor,
  },
  fabStyle: {
    backgroundColor: '#0dbd71',
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
