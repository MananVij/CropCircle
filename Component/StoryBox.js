import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Button, Card, Text,Provider, TextInput} from 'react-native-paper';
// import Provider from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
import Theme from '../assests/Theme/theme'
export default function StoryBox() {
  return (
    <View style={styles.card}>
      <Provider theme={Theme}>
      <Card
        elevation={0}
        theme={{colors: {outline: 'black'}, roundness: 0}}
        style={{borderBottomColor: 'black', borderBottomWidth: 0.2}}>
        <Card.Title
          title="Saint Paul"
          //   subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          {/* <Text variant="titleMedium">Card Title</Text> */}
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Card.Content>
        <Card.Actions>
          <TextInput    
            placeholder="Write a comment..."
           style={styles.textStyle}>
          </TextInput>
          <Button >Like</Button>
        </Card.Actions>
      </Card>
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: '1.5%',
  },
  textStyle:{
    marginBottom:0,
    width:'75%',
  }
});
