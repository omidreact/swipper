import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"lightblue",justifyContent:"center",alignItems:"center"}}>
      <View style={{flex:3}}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide1}>
        <Text>Slide 1</Text>
      </View>
      <View style={styles.slide2}>
        <Text>Slide 2</Text>
      </View>
      <View style={styles.slide3}>
        <Text>Slide 3</Text>
      </View>
    </Swiper>
    </View>
    <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
<Text>ok</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
});