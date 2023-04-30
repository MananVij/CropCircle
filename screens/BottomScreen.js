import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Button} from 'react-native-paper';

export default function BottomScreen(props) {
  const [selected, setSelected] = useState('');

  return (
    <ActionSheet>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '3%',
          marginHorizontal: '2%',
        }}>
        {/* {props['crops']?.map((el, idx) => {
          return (
            <View
              key={idx}
              style={{
                flexWrap: 'wrap',
                marginHorizontal: '2%',
              }}>
              <Button
                onPress={() => {
                  if (selected == el.cropName) setSelected('');
                  else setSelected(el.cropName);
                }}
                mode={selected == el.cropName ? 'contained' : 'outlined'}
                style={styles.button}>
                {el.cropName}
              </Button>
            </View>
          );
        })} */}
      </View>
    </ActionSheet>
  );
}
const styles = StyleSheet.create({
  button: {
    // marginVertical: '1%',
  },
});
