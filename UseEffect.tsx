import React from 'react';
import {useState} from 'react';
import {Component} from 'react';
import {useEffect} from 'react';

import {
  Text, //First letter Capital
  View,
  SectionList,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import CompanyData from './components/CompanyData';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Hello');
  }, []); //when component mount = ,[]
  return (
    <View>
      <Text style={{fontSize: 30}}>Life Cyle with use effect</Text>
      <Button title="UpdateCount" onPress={() => setCount(2)} />
    </View>
  );
};

export default App;
