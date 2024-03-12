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
  StatusBar,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './components/Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import APIs from './components/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('user', 'Ankush');
  };

  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    setUser(name)
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('user');
    setUser()
  };
  return (
    <View style={{marginTop: 100, marginLeft: 30}}>
      <Text style={{fontSize: 40}}>
        Async Storage with React Native | {user}
      </Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};

export default App;
