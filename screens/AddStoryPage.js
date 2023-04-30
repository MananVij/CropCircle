import * as React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Avatar, Button, Card, Text, View, Provider} from 'react-native-paper';
import {BackHandler, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import Theme from '../assests/Theme/theme';
import {useNavigation} from '@react-navigation/native';
import {storeDataLocally} from '../utils/localStorage';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function AddStoryPage(props) {
  const [post, setPost] = React.useState('');

  const navigation = useNavigation();
  const {user, setPosts} = props?.route.params;

  const getAllPosts = async () => {
    await fetch(`${process.env.BASE_URL}/post`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(async res => {
        setPosts(res?.data);
        await storeDataLocally('posts', res);
      })
      .catch(e => {
        // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
        console.log(e, 'error', e.code);
      });
  };

  const uploadPost = async () => {
    if (post.length) {
      await fetch(`${process.env.BASE_URL}/post/sharepost`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user[0]?.token}`,
        },
        body: JSON.stringify({
          post: post,
          uid: user[0]?.user._id,
        }),
      })
        .then(res => res.json())
        .then(async res => {
          await getAllPosts();
          navigation.navigate('BottomNavigator');
        })
        .catch(e => {
          // ToastAndroid.show('Some Error Occured', ToastAndroid.BOTTOM);
          console.log(e, 'error', e.code);
        });
    } else {
      ToastAndroid.show('Please Enter Post', ToastAndroid.BOTTOM);
    }
  };

  return (
    <Provider theme={Theme}>
      <Card style={styles.container}>
        <Card.Title
          title={user[0]?.user.name}
          variant="titleLarge"
          left={LeftContent}
        />
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={'always'}>
          <TextInput
            placeholder=" What's Happening!!"
            autoFocus={true}
            value={post}
            onChangeText={post => {
              setPost(post);
            }}
            style={styles.tweetArea}></TextInput>
        </ScrollView>
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate('BottomNavigator');
            }}>
            Cancel
          </Button>
          <Button
            onPress={() => {
              uploadPost();
            }}>
            Post
          </Button>
        </Card.Actions>
      </Card>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tweetArea: {
    marginBottom: 200,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
  },
});
