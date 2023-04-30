import {View, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Avatar,
  Button,
  Card,
  Text,
  Provider,
  // TextInput¿,
  IconButton,
  MD3Colors,
  MD2Colors,
} from 'react-native-paper';
// import Provider from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="account" />;
import Theme from '../assests/Theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import theme from '../assests/Theme/theme';
import theme1 from '../assests/Theme/theme1';
import colors from '../assests/Theme/colors';
import {handleLikeBtn, updatePost} from '../utils/Data';
export default function StoryBox(prop) {
  const navigation = useNavigation();
  const {post, setPosts, user} = prop;
  const [comment, setComment] = useState();
  const [liked, setLiked] = useState();
  const [likeCounter, setLikeCounter] = useState(post?.likes?.length);

  useEffect(() => {
    post?.likes?.map(el => {
      if (el == user[0]?.user._id) {
        setLiked(true);
      }
    });
  }, [liked]);

  return (
    <View style={styles.card}>
      <Provider theme={Theme}>
        <Card
          style={{
            backgroundColor: colors.cardColor,
            borderRadius: 20,
            shadowColor: 'grey',
            elevation: 200,
            paddingBottom: '0.3%',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('PostScreen', {
                post: post,
                // setPosts: setPosts,
                user,
              });
            }}>
            <Card.Title title={post.uid.name} theme={{fonts: {regular: {fontFamily: 'Poppins-Thin'}}}} left={LeftContent} />
            <Card.Content>
              <Text variant="bodyMedium" style={{fontFamily: 'Poppins-SemiBold'}}>{post.post}</Text>
            </Card.Content>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#F3F6F8',
              margin: 10,
              borderRadius: 17,
              elevation: 1,
              paddingVertical: '1.5%',
              paddingRight: '2%',
            }}>
            <IconButton
              iconColor={MD2Colors.red500}
              style={{margin: 0, padding: 0, marginLeft: '1%'}}
              labelStyle={{color: 'black'}}
              onPress={async () => {
                const res = await updatePost(
                  user[0]?.token,
                  post?._id,
                  liked ? 'unlike' : 'like',
                );
                setLiked(!liked);
                liked
                  ? setLikeCounter(likeCounter - 1)
                  : setLikeCounter(likeCounter + 1);
              }}
              icon={liked ? 'heart' : 'heart-outline'}></IconButton>
            <Text style={{fontFamily: 'Poppins-Medium'}}>{likeCounter}</Text>
            <IconButton
              iconColor={MD2Colors.blue400}
              style={{margin: 0, padding: 0, marginLeft: '5%'}}
              labelStyle={{color: 'black'}}
              icon={'comment'}></IconButton>
            <Text style={{fontFamily: 'Poppins-Medium'}}>{post?.comments?.length}</Text>
          </View>
        </Card>
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: '2%',
    // paddingHorizontal: '2%'
    // mar
  },
  textStyle: {
    marginBottom: 0,
    // width: '75%',
  },
});
