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
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './components/Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPressIn={() => {
          console.warn('pressed in');
        }}
        onPressOut={() => {
          console.warn('pressed out');
        }}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    margin: 10,
    fontSize: 20,
    borderRadius: 5,
  },
});

export default App;
