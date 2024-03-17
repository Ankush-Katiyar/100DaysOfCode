import React, {useEffect} from 'react';
import {useState} from 'react';

import {
  Text, //First letter Capital
  View,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox2}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};
//flex : maintains always the ratio
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'orange',
  },
  box2: {
    flex: 2,
    backgroundColor: 'pink',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  InnerBox1: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  InnerBox2: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10,
  },
});
export default App;
