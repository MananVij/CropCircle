import * as React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Avatar, Button, Card, Text, View,Provider} from 'react-native-paper';
import {BackHandler, ScrollView, StyleSheet} from 'react-native';
import Theme from '../assests/Theme/theme'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function AddStoryPage({navigation}) {
  return (
    <Provider theme={Theme}>
    <Card style={styles.container}>
      <Card.Title
        title="Siddhant Keshari"
        variant="titleLarge"
        left={LeftContent}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'}>
        <TextInput
          placeholder=" What's Happening!!"
          autoFocus={true}
          style={styles.tweetArea}></TextInput>
      </ScrollView>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={() => {navigation.navigate("BottomNavigator")}}>Post</Button>
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
