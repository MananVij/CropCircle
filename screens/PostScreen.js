import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StoryBox from '../Component/StoryBox';
import {
  Button,
  Card,
  Provider,
  IconButton,
  MD2Colors,
  Text
} from 'react-native-paper';
import theme from '../assests/Theme/theme';
import theme1 from '../assests/Theme/theme1';
import {getData, updatePost, updatePostWithComment} from '../utils/Data';
import colors from '../assests/Theme/colors';

export default function PostScreen(props) {
  // const {post, setPosts, user} = props?.route?.params;
  const {post, user} = props?.route?.params;
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState();
  const [myPost, setMyPost] = useState();
  const [likeCounter, setLikeCounter] = useState(post?.likes?.length);
  const [commentCounter, setCommentCounter] = useState(post?.comments?.length);

  useEffect(() => {
    setMyPost(post);
    myPost?.likes?.map(el => {
      if (el == user[0]?.user._id) {
        setLiked(true);
      }
    });
  }, [liked]);

  return (
    <>
      <Provider theme={theme}>
        <View
          style={{
            backgroundColor: colors.bgColor,
            paddingHorizontal: '4%',
            flex: 1,
            paddingTop: '10%',
          }}>
          <Card
            theme={{colors: {outline: 'black'}, roundness: 0}}
            style={{
              backgroundColor: colors.cardColor,
              borderRadius: 20,
              shadowColor: 'grey',
              elevation: 20,
            }}>
            <Card.Title title={post?.uid.name} />
            <Card.Content>
              <Text variant="bodyMedium" style={{fontFamily: 'Poppins-SemiBold'}}>{myPost?.post}</Text>
            </Card.Content>

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
              <TextInput
                mode="outlined"
                placeholder="Comment..."
                value={comment}
                onChangeText={comment => setComment(comment)}
                style={{
                  backgroundColor: colors.cardColor,
                  width: '63%',
                  borderRadius: 10,
                  borderWidth: 0,
                  marginVertical: '0.5%',
                  marginLeft: '2%',
                }}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconButton
                  iconColor={MD2Colors.red500}
                  style={{margin: 0, padding: 0}}
                  labelStyle={{color: 'black'}}
                  onPress={async () => {
                    await updatePost(
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
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconButton
                  iconColor={MD2Colors.blue400}
                  style={{margin: 0, padding: 0}}
                  labelStyle={{color: 'black'}}
                  icon={'comment'}></IconButton>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{commentCounter}</Text>
              </View>
              <IconButton
                iconColor={MD2Colors.black}
                style={{margin: 0, padding: 0}}
                labelStyle={{color: 'black'}}
                onPress={async () => {
                  if (comment.length) {
                    const res = await updatePostWithComment(
                      user[0]?.token,
                      post?._id,
                      {comment},
                    );
                    console.log(res?.data);
                    if (res?.message == 'Successfully addComment post') {
                      setMyPost(res?.data);
                      setComment('');
                      setCommentCounter(commentCounter + 1);
                    }
                  }
                }}
                icon={'send-outline'}></IconButton>
              {/* </View> */}
            </View>
          </Card>
          <ScrollView>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                marginTop: '5%',
                marginBottom: '1%',
                fontFamily: 'Poppins-Medium'
              }}>
              Comments...
            </Text>
            {myPost?.comments?.map(el => {
              return (
                <View
                  key={el._id}
                  style={{
                    marginVertical: '1%',
                    backgroundColor: colors.cardColor,
                    borderRadius: 10,
                    padding: '5%',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Poppins-Light'
                      // marginHorizontal: '5%',
                    }}>
                    {el.comment}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: '1.5%',
  },
  textStyle: {
    // marginBottom: 0,

    width: '65%',
  },
});
